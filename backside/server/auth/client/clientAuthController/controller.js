const clientService = require("../../../service/clientServices.js");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
module.exports = {
  async signUpclient(req, res) {
    try {
      // res.send(req.body);
      if (!req.body.password || !req.body.username) {
        res.send({ msg: false });
      }
      bcrypt.hash(req.body.password, 10, async (err, hash) => {
        var client = req.body;
        client.password = hash;
        var a = await clientService.signup(client);
        res.send({ msg: true });
      });
    } catch {
      res.send("get error ");
    }
  },
  async login(req, res) {
    try {
      var client = await clientService.getClientByEmail(req.body.email);
      if (client) {
        bcrypt.compare(req.body.password, client.password, (err, result) => {
          if (result) {
            var token = jwt.sign({ id: client._id }, "sa7fa leblebi");
            var access_token = jwt.sign({ id: client._id }, "halelews");
            res.send({ token, access_token });
          } else {
            res.status(401).json({ msg: "wrong password" });
          }
        });
      } else {
        res.status(401).json({ msg: "wrong client name" });
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
      var client = await clientService.getClientById(objId.id);
      if (client) {
        res.send(client);
      } else {
        res.send({ msg: false });
      }
    } catch {
      res.send("get error ");
    }
  },
};
