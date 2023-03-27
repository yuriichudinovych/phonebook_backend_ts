const { Contact } = require("../../models");
const { NotFound } = require("http-errors");
const removeContactById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndRemove(contactId);
  if (!result) {
    throw new NotFound(`Contact with id=${contactId} not found`);
  }
  res.json({
    message: "contact deleted is successful",
    data: result,
  });
};
module.exports = removeContactById;
