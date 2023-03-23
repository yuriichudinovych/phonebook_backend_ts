const express = require("express");
const cors = require("cors");
const logger = require("morgan");
require("dotenv").config();

const contactsRouter = require("./routes/api/contacts.js");

const app = express();
const formatsLogger = app.get("env") === "development" ? "dev" : "short";
app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use("/api/contacts", contactsRouter);

module.exports = app;
