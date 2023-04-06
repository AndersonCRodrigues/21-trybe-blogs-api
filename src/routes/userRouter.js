const router = require('express').Router();
const logingController = require('../controllers/user.controller');
const { userCreateVerify } = require('../middlewares/userVerify');

router.post('/', userCreateVerify, logingController.create);