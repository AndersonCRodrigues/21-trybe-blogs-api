const router = require('express').Router();
const categoryController = require('../controllers/category.controller');
const tokenVerify = require('../middlewares/authValidation');
const { checkCategoryName } = require('../middlewares/categoryVerify');

router.post('/', tokenVerify, checkCategoryName, categoryController.create);

module.exports = router;