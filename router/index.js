// Volvemos a requerir express y le asignamos router como metodo .. : S
const express = require('express');
const router = express.Router();

const { verifyToken } = require('../middlewares')

// aqui se colocan las vistas por separado de cada CRUD 
// ahora con la expresion antes definida, usamos nuestro paquete de UserRouter

// Rutas Publicas
router.use(require('./UserRouter')) // <=  Para el usuario
router.use(require('./AuthRouter')) // <=  Para autorizar usuarios


// Rutas protegidas
router.use(verifyToken) //<= Con esto todas las rutas listadas mas abajo se van a proteger
router.use(require('./PostRouter')) // <=  Para crear Post
router.use(require('./PollRouter')) // <== para las Encuestas


module.exports = router;