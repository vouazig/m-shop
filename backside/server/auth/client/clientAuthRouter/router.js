const router = require("express").Router();
const clientController = require("../clientAuthController/controller.js");

router.post("/signup", clientController.signUpclient);
router.post("/signin", clientController.login);
router.post("/verify", clientController.verify);

module.exports = router;