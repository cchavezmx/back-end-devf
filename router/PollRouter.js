const express = require('express')
const router = express.Router()

const { PollValidators } = require('../validators/')
const { PollController } = require('../controller')


// CRUD

// CREAR POLL DE USUARIO 
router.post('/api/v1/user/:id/poll', PollValidators.create, PollController.create)

// SELECCIONAR EL POLL DE USUARIO 
router.get('/api/v1/user/:id/poll/', PollValidators.getByUserId, PollController.getByUserId)

//TODO revisar este control y validador 
// SELECCIONAR POLL POR ID Y POR USUARIO
router.get('/api/v1/user/:id/poll/:idPoll', PollValidators.getByUserAndPollId, PollController.getByUserAndPollId)

// SELECCIONAR EL POLL DE USUARIO 
router.delete('/api/v1/user/:id/poll/:idPoll', PollValidators.delete, PollController.delete)

// SELECCIONAR EL POLL DE USUARIO 
router.patch('/api/v1/user/:id/poll/:idPoll', PollValidators.patch, PollController.patch)

module.exports = router; 



