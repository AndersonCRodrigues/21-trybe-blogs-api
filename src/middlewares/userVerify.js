const userSchema = require('../schemas/user.schema');
const errorGenerate = require('../utils/errorGenerate');

const userLoginVerify = (req, _res, next) => {
  if (!req.body.email || !req.body.password) {
    throw errorGenerate(400, 'Some required fields are missing');
  }

  next();
};

const userCreateVerify = (req, _res, next) => {
  const { displayName, email, password } = req.body;

  const { error } = userSchema({ displayName, email, password });

  if (error) throw errorGenerate(400, error.message);

  next();
};

module.exports = { userLoginVerify, userCreateVerify };