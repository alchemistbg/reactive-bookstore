const express = require('express');
const router = express.Router();
const utils = require('../utils')


const userController = require('../controllers/users');

router.post('/', utils.validator.validateRegistrationData(), userController.register);
router.post('/me', userController.login);

module.exports = router;