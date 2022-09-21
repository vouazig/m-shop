const router = require("express").Router();
const shopOwnerController = require("../shopOwnerAuthController/controller.js");

router.post("/signup", shopOwnerController.signUpShopOwner);
router.post("/signin", shopOwnerController.login);
router.post("/verify", shopOwnerController.verify);
router.post("/forgetPassword", shopOwnerController.forgetPassword);
router.post("/updatePassword", shopOwnerController.updatedPassword);

module.exports = router;
