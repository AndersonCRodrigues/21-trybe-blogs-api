const Joi = require('joi');

const categorySchema = Joi.object({
  name: Joi.string().required().label('name'),
}).messages({
  'any.required': '{{#label}} is required',
});

module.exports = categorySchema;