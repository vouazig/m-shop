const shopOwnerService = require("../../../service/shopOwnerService.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    shopOwner: "",
    pass: "",
  },
  tls: {
    rejectUnauthorized: false,
  },
});
module.exports = {
  async signUpShopOwner(req, res) {
    try {
      if (!req.body.password || !req.body.email) {
        res.status(401).json({ msg: false });
      }
      var shopOwner = await shopOwnerService.getShopOwnerByEmail(req.body.email);
      if (shopOwner) {
        res.status(401).json({ msg: "email already exist" });
      }
      bcrypt.hash(req.body.password, 10, async (err, hash) => {
        var shopOwner = req.body;
        shopOwner.password = hash;
        var a = await shopOwnerService.signup(shopOwner);
        var u = await shopOwnerService.getShopOwnerByEmail(req.body.email);

        var token = jwt.sign({ id: u._id }, "sa7fa leblebi");
        var access_token = jwt.sign({ id: u._id }, "halelews");
        res.send({ token, access_token });
      });
    } catch {
      res.send("get error ");
    }
  },
  async login(req, res) {
    try {
      var shopOwner = await shopOwnerService.getShopOwnerByEmail(req.body.email);
      if (shopOwner) {
        bcrypt.compare(req.body.password, shopOwner.password, (err, result) => {
          if (result) {
            var token = jwt.sign({ id: shopOwner._id }, "sa7fa leblebi");
            var access_token = jwt.sign({ id: shopOwner._id }, "halelews");
            res.send({ token, access_token });
          } else {
            res.status(401).json({ msg: "wrong password" });
          }
        });
      } else {
        res.status(401).json({ msg: "wrong email" });
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
      var shopOwner = await shopOwnerService.getShopOwnerById(objId.id);
      if (shopOwner) {
        res.send(shopOwner);
      } else {
        res.send({ msg: false });
      }
    } catch {
      res.send("get error ");
    }
  },
  async forgetPassword(req, res) {
    try {
      var shopOwner = await shopOwnerService.getShopOwnerByEmail(req.body.email);
      if (!shopOwner) {
        res.status(401).json({ msg: "there is no account with this email" });
      }
      var token = jwt.sign({ id: shopOwner._id }, "sa7fa leblebi");
      var link = "https://M-SHOP.tn/shopOwner/forgetpassword?token=" + token;
      let mailOptions = {
        from: "carrierytn@gmail.com",
        to: req.body.email,
        subject: "Update Password",
        text: link,
      };
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          res.send({ msg: "updated" });
        }
      });
      res.send({ msg: "updated" });
    } catch {
      res.send("error updated");
    }
  },

  async updatedPassword(req, res) {
    try {
      var objId = jwt.verify(req.body.token, "sa7fa leblebi");
      var shopOwner = await shopOwnerService.getShopOwnerById(objId.id);
      bcrypt.hash(req.body.password, 10, async (err, hash) => {
        var m = await shopOwnerService.updatePassword(shopOwner._id, hash);
        var token = jwt.sign({ id: shopOwner._id }, "sa7fa leblebi");
        var access_token = jwt.sign({ id: shopOwner._id }, "halelews");
        res.send({ token, access_token });
      });
    } catch {
      res.status(401).json({ msg: "wrong password" });
    }
  },
};
