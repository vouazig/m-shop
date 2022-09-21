const adminService = require("../service/adminService.js");

module.exports = {
  async getadmin(req, res, next) {
    try {
      var admin = await adminService.getAllAdmin();
      res.send(admin);
    } catch (next) {
      res.status(401).json(next);
    }
  },
  async getpaiments(req, res, next) {
    try {
      var p = await paimentService.getAllPaiment().populate("shopownerId");
      res.send(p);
    } catch (next) {
      res.status(401).json(next);
    }
  },
  async confirmPaiment(req, res, next) {
    try {
      var tr = await paimentService.findById(req.params._id);
      var p = await paimentService.approve(req.params._id);

      var transaction = await transactionService.create({
        from: "m-shop",
        to: tr.shopownerId,
        amount: tr.commetion,
        method: "withdrow",
      });
      res.send({ msg: "updated" });
    } catch (next) {
      res.status(401).json(next);
    }
  },
  async deleteByParams(req, res, next) {
    try {
      var admin = await adminService.delete(req.params.id);
      res.send({ msg: "deleted" });
    } catch (next) {
      res.status(401).json(next);
    }
  },

  async updatedPassword(req, res, next) {
    try {
      var admin = await adminService.updatePassword(
        req.params.id,
        req.body.password
      );
      res.send({ msg: "updated" });
    } catch (next) {
      res.status(401).json(next);
    }
  },
};
