const router = require('express').Router();
const postController = require('../controllers/post.controller');
const tokenVerify = require('../middlewares/authValidation');
const { checkPostCreate, checkPostPut } = require('../middlewares/postVerify');

router.post('/', tokenVerify, checkPostCreate, postController.create);
router.get('/', tokenVerify, postController.getAll);
router.get('/:id', tokenVerify, postController.getOne);
router.put('/:id', tokenVerify, checkPostPut, postController.update);
router.delete('/:id', tokenVerify, postController.destroy);

module.exports = router;