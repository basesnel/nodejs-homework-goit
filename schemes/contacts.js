const Joi = require("joi");

const { emailRegexp, phoneRegexp } = require("../constants/contacts");

const messages = {
  required: "missing required {{#label}} field",
  empty: "{{#label}} cannot be an empty field",
};

const contactAddScheme = Joi.object({
  name: Joi.string().required().messages({
    "any.required": messages.required,
    "string.empty": messages.empty,
  }),
  email: Joi.string().required().messages({
    "any.required": messages.required,
    "string.empty": messages.empty,
  }),
  phone: Joi.string().required().messages({
    "any.required": messages.required,
    "string.empty": messages.empty,
  }),
  favorite: Joi.boolean(),
});

const contactUpdateFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

module.exports = {
  contactAddScheme,
  contactUpdateFavoriteSchema,
};
