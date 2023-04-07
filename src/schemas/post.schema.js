const Joi = require('joi');

const error = 'Some required fields are missing';

const postSchema = Joi.object({
  title: Joi.string().required().label('name'),
  content: Joi.string().required().label('name'),
  categoryIds: Joi.array().min(1).required().label('name'),
}).messages({
  'any.required': error,
  'array.min': error,
  'string.empty': error,
  'array.empty': error,
});

const postSchemaPut = Joi.object({
  title: Joi.string().required().label('name'),
  content: Joi.string().required().label('name'),
  categoryIds: Joi.array().min(1).required().label('name'),
}).messages({
  'any.required': error,
  'array.min': error,
  'string.empty': error,
  'array.empty': error,
});

module.exports = { postSchema, postSchemaPut };