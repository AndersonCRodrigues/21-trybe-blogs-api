const userService = require('../services/user.service');

const login = async (req, res, next) => {
  try {
    const token = await userService.login(req.body);
    res.status(200).json({ token });
  } catch (e) {
    next(e);
  }
};

module.exports = { login };