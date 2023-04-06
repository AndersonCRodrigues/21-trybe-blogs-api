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

const create = async ({ displayName, email, password, image = null }) => {
  if (await userCheck(email)) throw errorGenerate(409, 'User already registered');

  await User.create({ displayName, email, password, image });
  return auth.createToken(email);
};

const getAll = async () => User.findAll({ attributes: ['id', 'displayName', 'email', 'image'] });

const getOne = async (id) => User
  .findByPk(id, { attributes: ['id', 'displayName', 'email', 'image'] });

module.exports = { login, create, getAll, getOne };