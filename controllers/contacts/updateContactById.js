const { Contact } = require("../../models");
const { NotFound } = require("http-errors");

const updateContactById = async (req, res) => {
  const { contactId } = req.params;

  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!result) {
    throw new NotFound(`Contact with id=${contactId} not found`);
  }
  res.json({ data: result });
};

module.exports = updateContactById;
