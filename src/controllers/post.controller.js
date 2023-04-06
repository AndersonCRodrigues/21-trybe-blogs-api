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

module.exports = { create };