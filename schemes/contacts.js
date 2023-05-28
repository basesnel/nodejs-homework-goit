const Joi = require("joi");

const contactAddScheme = Joi.object({
  name: Joi.string().required().messages({
    "any.required": `missing required {{#label}} field`,
    "string.empty": `{{#label}} cannot be an empty field`,
  }),
  email: Joi.string()
    .required()
    .pattern(new RegExp(/\S+@\S+\.\S+/))
    .messages({
      "string.pattern.base":
        "invalid {{#label}}, must be (i.e): example@domain.tld",
      "any.required": `missing required {{#label}} field`,
      "string.empty": `{{#label}} cannot be an empty field`,
    }),
  phone: Joi.string()
    .required()
    .pattern(new RegExp(/[(]?\d{3}[)]? \d{3}-\d{4}/))
    .messages({
      "string.pattern.base": "invalid {{#label}}, must be: (000) 000-0000",
      "any.required": `missing required {{#label}} field`,
      "string.empty": `{{#label}} cannot be an empty field`,
    }),
});

module.exports = {
  contactAddScheme,
};
