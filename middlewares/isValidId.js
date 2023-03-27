const { isValidObjectId } = require("mongoose");
const { BadRequest } = require("http-errors");

const isValidId = (req, res, next) => {
  const { contactId } = req.params;
  console.log(!isValidObjectId(contactId));
  if (!isValidObjectId(contactId)) {
    throw new BadRequest(`Invalid id`);
  }
  next();
};

module.exports = isValidId;
