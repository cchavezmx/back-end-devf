const express = require('express');
const router = express.Router();
const cors = require('cors')
// MILDDLEWARES
router.use(express.urlencoded({ extended: true }));
router.use(express.json({ extended: true }));

const { UserValidator } = require('../validators')
const { UserController } = require('../controller/');

// Vista de Rutas
router.use(cors())
router.use('/api/v1/signup/', UserValidator.signup, UserController.signup)
router.use('/api/v1/login', UserValidator.login, UserController.login)

module.exports = router