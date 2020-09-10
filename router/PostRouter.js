const express = require('express');
const router = express.Router();

const { PostValidator } =require('../validators/')
const { PostController } = require('../controller')


// recuerda que debibo a que el schema esta ebebido para acceder a estos metodos debemos acceder a los usuarios
// a cada POST LE PONES SU VALIDATOR Y SU CONTROLADOR 



router.post('/api/v1/user/:id/posts', PostValidator.create, PostController.create)

// Seleccionar una post por usuario 
router.get('/api/v1/user/:id/posts/:idPost', PostValidator.getById, PostController.getById)

// Seleccionar todos los posts del usuario 
router.get('/api/v1/user/:id/posts', PostValidator.getAllPost, PostController.getAllPost)

// Borrar un post
router.delete('/api/v1/user/:id/posts/:idPost', PostValidator.delete, PostController.delete)

// Modificar un post
router.patch('/api/v1/user/:id/posts/:idPost', PostValidator.patch, PostController.patch)

module.exports = router;