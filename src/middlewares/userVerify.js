const errorGenerate = require('../utils/errorGenerate');

const userLoginVerify = (req, _res, next) => {
  if (req.body.email || req.body.password) {
    throw errorGenerate(400, 'Some required fields are missing');
  }

  next();
};

module.exports = { userLoginVerify };