const express = require('express');
const router = express.Router();

// MILDDLEWARES
router.use(express.urlencoded({ extended: true }));
router.use(express.json({ extended: true }));

const { UserValidator } = require('../validators')
const { UserController } = require('../controller/')


// Vista de Rutas
router.get('/api/v1/user/', UserController.get)
router.post('/api/v1/user/', UserValidator.create, UserController.create) // validamos que el correo sea un correo correcto, con usuario y dominio 
router.get('/api/v1/user/:id', UserValidator.getById, UserController.getByID)
router.patch('/api/v1/user/:id', UserValidator.patch, UserController.patch)
router.delete('/api/v1/user/:id', UserController.delete)


// Solo se exporta el router por que no es un objeto
module.exports = router
