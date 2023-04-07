const postService = require('../services/post.service');

const create = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    const data = await postService.create(req.body, token);
    res.status(201).json(data);
  } catch (e) {
    next(e);
  }
};

const getAll = async (req, res) => {
  const data = await postService.getAll();

  res.status(200).json(data);
};

const getOne = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await postService.getOne(+id);
    res.status(200).json(data);
  } catch (e) {
    next(e);
  }
};

const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const token = req.headers.authorization;
    const data = await postService.update(req.body, +id, token);
    res.status(200).json(data);
  } catch (e) {
    next(e);
  }
};
module.exports = { create, getAll, getOne, update };