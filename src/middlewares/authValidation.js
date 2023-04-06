const { verifyToken } = require('../utils/auth');
const errorGenerate = require('../utils/errorGenerate');

const tokenVerify = (req, res, next) => {
  if (!req.headers.authorization) throw errorGenerate(401, 'Token not found');
  const verify = verifyToken(req.headers.authorization);
  if (!verify.email) throw errorGenerate(401, 'Expired or invalid token');

  next();
};

module.exports = tokenVerify;