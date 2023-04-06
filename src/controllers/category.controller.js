const categoryService = require('../services/category.service');

const create = async (req, res) => {
  const { name } = req.body;
  const data = await categoryService.create(name);
  res.status(201).json(data);
};

const getAll = async (req, res) => {
  const data = await categoryService.getAll();
  res.status(200).json(data);
};

module.exports = { create, getAll };