const express = require("express");

const contactsController = require("../../controllers/contacts-controller");

const schemes = require("../../schemes/contacts");

const { validateBody, isBodyInRequest } = require("../../decorators");

const router = express.Router();

router.get("/", contactsController.getAllContacts);

router.get("/:contactId", contactsController.getContactById);

router.post(
  "/",
  validateBody(schemes.contactAddScheme),
  contactsController.addContact
);

router.put(
  "/:contactId",
  isBodyInRequest,
  validateBody(schemes.contactAddScheme),
  contactsController.updateContactById
);

router.delete("/:contactId", contactsController.deleteContactById);

module.exports = router;
