const router = require('express').Router();
const logingController = require('../controllers/login.controller');

router.post('/', logingController.login);

module.exports = router;