const { User } = require('../models');
const errorGenerate = require('../utils/errorGenerate');
const auth = require('../utils/auth');

const userCheck = async (email) => {
  const data = await User.findOne({ where: { email } });
  return data;
};

const login = async ({ email, password }) => {
  const verify = await userCheck(email);

  if (!verify) throw errorGenerate(400, 'Invalid fields');
  if (verify.dataValues.password !== password) throw errorGenerate(400, 'Invalid fields');

  return auth.createToken(verify.dataValues.email);
};

module.exports = { login };