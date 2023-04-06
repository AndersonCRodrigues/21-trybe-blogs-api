const jwt = require('jsonwebtoken');

const secretkey = process.env.JWT_SECRET;
const jwtConfig = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const createToken = (email) => {
  const data = {
    email,
  };

  const token = jwt.sign(data, secretkey, jwtConfig);

  return token;
};

const decodeToken = (token) => {
  const decode = jwt.verify(token, secretkey);
  return decode;
};

const verifyToken = (token) => {
  try {
    const verify = jwt.verify(token, secretkey);
    return verify;
  } catch (e) {
    return e;
  }
};

module.exports = { createToken, decodeToken, verifyToken };