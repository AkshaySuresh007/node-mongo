const express = require('express');
const AuthController = require('../src/controllers/authController');
const { requestMiddleware } = require('../src/middlewares');
const { userRegisterValidatonSchema, loginValidationSchema } = require('../src/validations');
const { middleware } = require('../helpers');
const router = express.Router();

router.post('/register', middleware(['validation'], userRegisterValidatonSchema), AuthController.register);
router.post('/login', middleware(['validation'], loginValidationSchema), AuthController.login);

module.exports = router;