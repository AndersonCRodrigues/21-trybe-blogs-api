const router = require('express').Router();
const postController = require('../controllers/post.controller');
const tokenVerify = require('../middlewares/authValidation');
const { checkPostCreate } = require('../middlewares/postVerify');

router.post('/', tokenVerify, checkPostCreate, postController.create);
router.get('/', tokenVerify, postController.getAll);

module.exports = router;