const router = require("express").Router();
const ClientController = require("../controller/clientController.js");
const { verifyAccessToken } = require("../jwt_helpers.js");

router.get(
  "/:id",
  verifyAccessToken(["Admin", "Client"]),
 ClientController.getClientById
);
router.get("/", verifyAccessToken(["Admin","client"]),ClientController.getClient);
router.put(
  "/:id",
  verifyAccessToken(["Client"]),
 ClientController.updated
);
router.delete(
  "/:id",
  verifyAccessToken(["Admin","Client"]),
 ClientController.deleteByParams
);
router.put(
  "/password/:id",
  verifyAccessToken(["Client"]),
 ClientController.updatedPassword
);

module.exports = router;
