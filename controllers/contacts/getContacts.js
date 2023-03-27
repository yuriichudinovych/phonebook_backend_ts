const { Contact } = require("../../models");

const getContacts = async (req, res) => {
  const result = await Contact.find({});
  res.json({
    data: result,
  });
};

module.exports = getContacts;
