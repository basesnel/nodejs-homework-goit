const express = require("express");

const authController = require("../../controllers/auth-controller");

const schemas = require("../../schemes/users");

const { validateBody } = require("../../decorators");

const { authenticate, upload } = require("../../middlewares");

const router = express.Router();

router.post(
  "/register",
  validateBody(schemas.userRegisterSchema),
  authController.signup
);

router.get("/verify/:verificationCode", authController.verify);

router.post(
  "/verify",
  validateBody(schemas.userEmailSchema),
  authController.resendVerify
);

router.post(
  "/login",
  validateBody(schemas.userLoginSchema),
  authController.signin
);

router.get("/current", authenticate, authController.getCurrent);

router.post("/logout", authenticate, authController.logout);

router.patch(
  "/current",
  authenticate,
  validateBody(schemas.userSubscriptionSchema),
  authController.updateSubscriptionUser
);

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatarURL"),
  validateBody(schemas.userAvatarSchema),
  authController.updateAvatarUser
);

module.exports = router;
