const Joi = require('joi');

const categorySchema = Joi.object({
  name: Joi.string().required().label('name'),
}).messages({
  'string.required': '{{#label}} is required',
  'string.empty': '{{#label}} is required',
});

module.exports = categorySchema;