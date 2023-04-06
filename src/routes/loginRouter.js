const router = require('express').Router();
const logingController = require('../controllers/login.controller');
const { userLoginVerify } = require('../middlewares/userVerify');

router.post('/', userLoginVerify, logingController.login);

module.exports = router;