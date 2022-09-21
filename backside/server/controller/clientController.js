const ClientService = require("../service/clientServices");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  async getClient(req, res, next) {
    try {
      var Client = await ClientService.getAllClient();
      res.send(Client);
    } catch (next) {
      res.status(401).json(next);
    }
  },
  async getClientById(req, res, next) {
    try {
      var Client = await ClientService.getClientById(req.params.id);
      res.send(Client);
    } catch (next) {
      res.status(401).json(next);
    }
  },
  async deleteByParams(req, res, next) {
    try {
      var Client = await ClientService.delete(req.params.id);
      res.send({ msg: "deleted" });
    } catch (next) {
      res.send("error deleting_params");
    }
  },
  async updated(req, res, next) {
    try {
      var Client = await ClientService.update(req.params.id, req.body);
      res.send({ msg: "updated" });
    } catch (next) {
      res.status(401).json(next);
    }
  },
  async updatedPassword(req, res, next) {
    try {
      var Client = await ClientService.updatePassword(
        req.params.id,
        req.body.password
      );
      res.send({ msg: "updated" });
    } catch (next) {
      res.status(401).json(next);
    }
  },
};
