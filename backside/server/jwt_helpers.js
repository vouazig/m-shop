const jwt = require("jsonwebtoken");
var createError = require("http-errors");
const adminService = require("./service/adminService.js");
const shopownerService = require("./service/shopOwnerService.js");

module.exports = {
  verifyAccessToken: (roles) => (req, res, next) => {
    // return;
    if (!req.header("authorization")) {
      return next(createError.Unauthorized());
    }
    var token = req.header("authorization").split(" ")[1];
    jwt.verify(token, "halelews", async (err, p) => {
      if (err) {
        return next(createError.Unauthorized());
      } else {
        console.log(p);
        var shopowner = (await shopownerService.getshopownerById(p.id)) || {};
        var admin = (await adminService.getAdminById(p.id)) || {};
        console.log(shopowner.type, coach.type, admin.type);
        if (
          roles.includes(shopowner.type) ||
          roles.includes(admin.type)
        ) {
          req.payload = p;
          console.log("bingo bingooo");
          next();
        } else {
          return next(createError.Unauthorized());
        }
      }
    });
  },
};
