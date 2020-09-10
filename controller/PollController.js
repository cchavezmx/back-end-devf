const { UserService, PollService } = require('../services');

module.exports = {

    create: async (req, res) => {
        const { id } = req.params
        const { body } = req

        try {
       //buscar el usuario
        const user =  await UserService.getByID(id)
        if(!user) res.status(404).json({mesaage: 'Usuario no econtrado'})

        // Guardamos el contenido de body con el esquema de la encuesta
        const poll = PollService.create(body)
        if(!poll) res.status(500).json({mesaage: 'Error al crear la encuesta'});

        // Guardamos la encuesta dentro del usuario
        const userWhitPoll = await UserService.addPoll(user, poll)

        res.status(201).json(userWhitPoll)
            
        } catch (error) {
            res.status(404).json({mesaage: `Error general ${error}`})
        }
    }, 

    getByUserId: async (req, res) => {
        const { id } = req.params

        try {
        // buscar el usuario
        const user =  await UserService.getByID(id)
        if(!user) res.status(404).json({mesaage: 'Usuario no econtrado'})
         // Treaer todas las preguntas por usuario

        const allPoll = await PollService.getByUserId(user)
        if(!allPoll) res.status(500).json({mesaage: 'Error al crear la encuesta'}); 

        // si todo sale bien regresamos la todas las encuestas. 
        res.status(201).json(allPoll)   

        } catch (error) {
            res.status(404).json({mesaage: `Error general ${error}`})  
        }

    },
    getByUserAndPollId: async (req, res) => {
            const { id, idPoll } = req.params
        try {
            // Buscamos el usuario 
            const user =  await UserService.getByID(id)
            if(!user) res.status(404).json({mesaage: 'Usuario no econtrado'})

            // Buscamos el Poll por ID 
            const pollId = await PollService.getByUserAndPollId(user, idPoll)
            if(!pollId) res.status(404).json({mesaage: 'Poll ID no econtrado'})

            res.status(200).json(pollId)
            
        } catch (error) {
        res.status(404).json({mesaage: `Error general ${error}`})  
        }
    },

    delete: async (req, res) => {
        const { id, idPoll } = req.params
  
        try {       
        // buscar el usuario
        const user =  await UserService.getByID(id)
        if(!user) res.status(404).json({mesaage: 'Usuario no econtrado'})

        // Treaer todas las preguntas por usuario
        const allPoll = await PollService.getByUserAndPollId(user, idPoll)
        if(!allPoll) res.status(500).json({mesaage: 'El id de la encuesta no es el correcto'}); 

        // Borrado Logico para las encuesas
        await PollService.patch(user, idPoll, { is_active: false })
        
        // si todo sale bien regresamos la todas las encuestas. 
        res.status(204).json({ mesaage: 'Encuesta eliminada '})

        } catch (error) {
        res.status(404).json({mesaage: `Error general ${error}`})  
        }

    },

    patch: async (req, res) => {
        const { id, idPoll } = req.params
        const { body } = req

        try {
        // buscar el usuario
        const user =  await UserService.getByID(id)
        if(!user) res.status(404).json({mesaage: 'Usuario no econtrado'})

        // Treaer todas las preguntas por usuario
        const poll = await PollService.getByUserAndPollId(user, idPoll)
        if(!poll) res.status(500).json({mesaage: 'El id de la encuesta no es el correcto'}); 

        // Para actualizar necesitamos pasar el user, el idPoll y el body
        const updatePoll = await PollService.patch(user, idPoll, body)

        // Retornamos solo el poll modificado
        res.status(201).json(updatePoll.polls.id(idPoll))

        } catch (error) {
            res.status(404).json({mesaage: `Error general ${error}`})    
        }

    }

}