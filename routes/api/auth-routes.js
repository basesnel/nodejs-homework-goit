const express = require("express");

const authController = require("../../controllers/auth-controller");

const schemas = require("../../schemes/users");

const { validateBody } = require("../../decorators");

const { authenticate } = require("../../middlewares");

const router = express.Router();

router.post(
  "/register",
  validateBody(schemas.userRegisterSchema),
  authController.signup
);

router.post(
  "/login",
  validateBody(schemas.userLoginSchema),
  authController.signin
);

router.get("/current", authenticate, authController.getCurrent);

router.post("/logout", authenticate, authController.logout);

module.exports = router;
