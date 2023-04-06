const router = require('express').Router();
const logingController = require('../controllers/user.controller');
const tokenVerify = require('../middlewares/authValidation');
const { userCreateVerify } = require('../middlewares/userVerify');

router.post('/', userCreateVerify, logingController.create);
router.get('/', tokenVerify);

module.exports = router;