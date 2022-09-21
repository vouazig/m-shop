const adminService = require("../../../service/adminService.js");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
module.exports = {
  async signUpadmin(req, res) {
    try {
      // res.send(req.body);
      if (!req.body.password || !req.body.username) {
        res.send({ msg: false });
      }
      bcrypt.hash(req.body.password, 10, async (err, hash) => {
        var admin = req.body;
        admin.password = hash;
        var a = await adminService.signup(admin);
        res.send({ msg: true });
      });
    } catch {
      res.send("get error ");
    }
  },
  async login(req, res) {
    try {
      var admin = await adminService.getAdminByUsername(req.body.username);
      if (admin) {
        bcrypt.compare(req.body.password, admin.password, (err, result) => {
          if (result) {
            var token = jwt.sign({ id: admin._id }, "sa7fa leblebi");
            var access_token = jwt.sign({ id: admin._id }, "halelews");
            res.send({ token, access_token });
          } else {
            res.status(401).json({ msg: "wrong password" });
          }
        });
      } else {
        res.status(401).json({ msg: "wrong admin name" });
      }
    } catch {
      res.send("get error ");
    }
  },
  async verify(req, res) {
    try {
      if (!req.body.token) {
        res.send({ msg: false });
      }
      var objId = jwt.verify(req.body.token, "sa7fa leblebi");
      var admin = await adminService.getAdminById(objId.id);
      if (admin) {
        res.send(admin);
      } else {
        res.send({ msg: false });
      }
    } catch {
      res.send("get error ");
    }
  },
};
