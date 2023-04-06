const router = require('express').Router();
const categoryController = require('../controllers/category.controller');
const tokenVerify = require('../middlewares/authValidation');
const { checkCategoryName } = require('../middlewares/categoryVerify');

router.post('/', tokenVerify, checkCategoryName, categoryController.create);
router.get('/', tokenVerify, categoryController.getAll);

module.exports = router;