const express = require("express");
const router = express.Router();
const {
  logoutController,
  registerController,
  loginController,
  getCurrentUserController,
} = require("../../controllers/");
const controllerWrapper = require("../../helpers/controllerWrapper");
const { auth } = require("../../middlewares");

router.post("/register", controllerWrapper(registerController));
router.post("/login", controllerWrapper(loginController));


router.get(
  "/current",
  authentificate,
  controllerWrapper(getCurrentUserController)
);

router.get("/logout", auth, controllerWrapper(logoutController));

router.get("/current", auth, controllerWrapper(getCurrentUser));




module.exports = router;
