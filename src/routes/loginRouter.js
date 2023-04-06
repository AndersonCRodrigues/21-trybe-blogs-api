const router = require('express').Router();
const userController = require('../controllers/user.controller');
const { userLoginVerify } = require('../middlewares/userVerify');

router.post('/', userLoginVerify, userController.login);

module.exports = router;