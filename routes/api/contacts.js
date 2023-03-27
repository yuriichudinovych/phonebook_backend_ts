const express = require("express");
const { contacts: ctrl } = require("../../controllers");
const { validateBody, ctrlWrapper, isValidId } = require("../../middlewares");
const { joiSchemas } = require("../../models/contact");
const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getContacts));

router.post(
  "/",
  //   validateBody(joiSchemas.addContactSchema),
  ctrlWrapper(ctrl.addContact)
);

router.get("/:contactId", isValidId, ctrlWrapper(ctrl.getContactById));

router.delete("/:contactId", isValidId, ctrlWrapper(ctrl.removeContactById));

router.patch("/:contactId", isValidId, ctrlWrapper(ctrl.updateContactById));

module.exports = router;
