const { Schema, model } = require("mongoose");

const { handleMongooseError } = require("../helpers");

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
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { versionKey: false }
);

contactSchema.post("save", handleMongooseError);

const Contact = model("contact", contactSchema);

module.exports = Contact;
