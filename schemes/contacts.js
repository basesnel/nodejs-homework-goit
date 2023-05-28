const Joi = require("joi");

const contactAddScheme = Joi.object({
  name: Joi.string().required().messages({
    "any.required": `missing required name field`,
    "string.empty": `"name" cannot be an empty field`,
  }),
  email: Joi.string().required().messages({
    "any.required": `missing required email field`,
    "string.empty": `"email" cannot be an empty field`,
  }),
  phone: Joi.string().required().messages({
    "any.required": `missing required phone field`,
    "string.empty": `"phone" cannot be an empty field`,
  }),
});

module.exports = {
  contactAddScheme,
};
