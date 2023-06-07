const { Schema, model } = require("mongoose");

const { handleMongooseError } = require("../middlewares");

// const { emailRegexp, phoneRegexp } = require("../constants/contacts");

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      // match: emailRegexp,
      required: true,
    },
    phone: {
      type: String,
      // match: phoneRegexp,
      required: true,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false }
);

contactSchema.post("save", handleMongooseError);

const Contact = model("contact", contactSchema);

module.exports = Contact;
