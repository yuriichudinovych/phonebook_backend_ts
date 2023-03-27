const { Contact } = require("../../models");

const addContact = async (req, res) => {
  const result = await Contact.create(req.body);

  res.json({
    data: result,
  });
};

module.exports = addContact;
