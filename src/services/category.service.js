const { Category } = require('../models');

const create = async (name) => {
  const data = await Category.create({ name });
  console.log(data);
  return data;
};

module.exports = { create };