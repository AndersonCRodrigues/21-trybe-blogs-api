const Joi = require('joi');

const userSchema = Joi.object({
  displayName: Joi.string().required().min(8).label('displayName'),
  password: Joi.string().required().min(6).label('password'),
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
  .required().label('email'),
}).messages({
  'any.min': '{{#label}} length must be at last {#limit} characters long',
  'email.email': '{{#label}} must be a valid email',
});

module.exports = userSchema;