const express = require("express");

const contactsController = require("../../controllers/contacts-controller");

const schemes = require("../../schemes/contacts");

const { validateBody } = require("../../decorators");

const {
  isValidId,
  isBodyInRequest,
  isBodyFavoriteInRequest,
  authenticate,
} = require("../../middlewares");

const router = express.Router();

router.use(authenticate);

router.get("/", contactsController.getAllContacts);

router.get("/:contactId", isValidId, contactsController.getContactById);

router.post(
  "/",
  validateBody(schemes.contactAddScheme),
  contactsController.addContact
);

router.put(
  "/:contactId",
  isValidId,
  isBodyInRequest,
  validateBody(schemes.contactAddScheme),
  contactsController.updateContactById
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  isBodyFavoriteInRequest,
  validateBody(schemes.contactUpdateFavoriteSchema),
  contactsController.updateStatusContact
);

router.delete("/:contactId", contactsController.deleteContactById);

module.exports = router;
