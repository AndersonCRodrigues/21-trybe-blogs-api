const router = require('express').Router();
const userController = require('../controllers/user.controller');
const tokenVerify = require('../middlewares/authValidation');
const { userCreateVerify } = require('../middlewares/userVerify');

router.post('/', userCreateVerify, userController.create);
router.get('/', tokenVerify, userController.getAll);
router.delete('/me', tokenVerify, userController.destroy);
router.get('/:id', tokenVerify, userController.getOne);

module.exports = router;