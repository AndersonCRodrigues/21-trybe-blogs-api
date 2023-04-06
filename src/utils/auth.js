const jwt = require('jsonwebtoken');

const secretkey = process.env.JWT_SECRET;
const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const createToken = (email, name) => {
  const data = {
    email,
    name,
  };

  const token = jwt.sign(data, secretkey, jwtConfig);

  return token;
};

const decodeToken = (token) => {
  const decode = jwt.verify(token, secretkey);

  return decode;
};

const verifyToken = (token) => {
    const verify = jwt.verify(token, secretkey);
    return verify;
};

module.exports = { createToken, decodeToken, verifyToken };