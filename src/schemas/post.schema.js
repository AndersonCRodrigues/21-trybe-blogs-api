const Joi = require('joi');

const postSchema = Joi.object({
  title: Joi.string().required().label('name'),
  content: Joi.string().required().label('name'),
  categoryIds: Joi.array().min(1).required().label('name'),
}).messages({
  'any.required': 'Some required fields are missing',
  'array.min': 'Some required fields are missing',
  'any.empty': 'Some required fields are missing',
});

module.exports = postSchema;