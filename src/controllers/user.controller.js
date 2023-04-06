const userService = require('../services/user.service');

const login = async (req, res, next) => {
  try {
    const token = await userService.login(req.body);
    res.status(200).json({ token });
  } catch (e) {
    next(e);
  }
};

const create = async (req, res, next) => {
  try {
    const token = await userService.create(req.body);
    res.status(201).json({ token });
  } catch (e) {
    next(e);
  }
};

const getAll = async (req, res) => {
  const data = await userService.getAll();
  res.status(200).json(data);
};

module.exports = { login, create, getAll };