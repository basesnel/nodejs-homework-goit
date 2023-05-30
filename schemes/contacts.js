const Joi = require("joi");

const warnings = {
  required: "missing required {{#label}} field",
  noPattern: "invalid {{#label}}, must be",
  empty: "{{#label}} cannot be an empty field",
};

const contactAddScheme = Joi.object({
  name: Joi.string().required().messages({
    "any.required": warnings.required,
    "string.empty": warnings.empty,
  }),
  email: Joi.string()
    .required()
    .pattern(new RegExp(/\S+@\S+\.\S+/))
    .messages({
      "string.pattern.base": `${warnings.noPattern} (i.e): example@domain.tld`,
      "any.required": warnings.required,
      "string.empty": warnings.empty,
    }),
  phone: Joi.string()
    .required()
    .pattern(new RegExp(/[(]?\d{3}[)]? \d{3}-\d{4}/))
    .messages({
      "string.pattern.base": `${warnings.noPattern}: (000) 000-0000`,
      "any.required": warnings.required,
      "string.empty": warnings.empty,
    }),
});

module.exports = {
  contactAddScheme,
};
