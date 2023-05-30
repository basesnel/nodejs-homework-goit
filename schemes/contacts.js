const Joi = require("joi");

const messages = {
  required: "missing required {{#label}} field",
  noPattern: "invalid {{#label}}, must be",
  empty: "{{#label}} cannot be an empty field",
};

const contactAddScheme = Joi.object({
  name: Joi.string().required().messages({
    "any.required": messages.required,
    "string.empty": messages.empty,
  }),
  email: Joi.string()
    .required()
    .pattern(new RegExp(/\S+@\S+\.\S+/))
    .messages({
      "string.pattern.base": `${messages.noPattern} (i.e): example@domain.tld`,
      "any.required": messages.required,
      "string.empty": messages.empty,
    }),
  phone: Joi.string()
    .required()
    .pattern(new RegExp(/[(]?\d{3}[)]? \d{3}-\d{4}/))
    .messages({
      "string.pattern.base": `${messages.noPattern}: (000) 000-0000`,
      "any.required": messages.required,
      "string.empty": messages.empty,
    }),
});

module.exports = {
  contactAddScheme,
};
