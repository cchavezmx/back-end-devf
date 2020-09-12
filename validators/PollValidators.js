const { celebrate, Joi, Segments } = require('celebrate')



module.exports = {
    create: celebrate ({
        [Segments.BODY]: Joi.object().keys({
            title: Joi.string().required(),
            pregunta1: Joi.string(),
            pregunta2: Joi.string(),
            pregunta3: Joi.string(),
            pregunta4: Joi.string(),
            pregunta5: Joi.string(),
            pregunta6: Joi.string(),
            pregunta7: Joi.string(),
            pregunta8: Joi.string(),
            pregunta9: Joi.string(),
            pregunta10: Joi.string(),
            permissions: Joi.string().valid('PUBLIC', 'PRIVATE')
        }),
    }),
    getById: celebrate ({
        [Segments.PARAMS]: Joi.object().keys({
            id: Joi.string().required(),
            idPoll: Joi.string().required(),
        })
    }),
    getByUserId: celebrate ({
        [Segments.PARAMS]: Joi.object().keys({
            id: Joi.string().required(),
        })
    }),
    delete: celebrate ({
        [Segments.PARAMS]: Joi.object().keys({
            id: Joi.string().required(),
            idPoll: Joi.string().required(),
        })
    }), // para PATCH debes debemos validar tanto los params como el body tambien estos no son requeridos
    patch: celebrate ({
        [Segments.PARAMS]: Joi.object().keys({
            id: Joi.string().required(),
            idPoll: Joi.string().required(),
        }),
        [Segments.BODY]: Joi.object().keys({
            pregunta1: Joi.string(),
            pregunta2: Joi.string(),
            pregunta3: Joi.string(),
            pregunta4: Joi.string(),
            pregunta5: Joi.string(),
            pregunta6: Joi.string(),
            pregunta7: Joi.string(),
            pregunta8: Joi.string(),
            pregunta9: Joi.string(),
            pregunta10: Joi.string(),
            permissions: Joi.string().valid('PUBLIC', 'PRIVATE')
        }),            
    }),
    getByUserAndPollId: celebrate ({
        [Segments.PARAMS]: Joi.object().keys({
            id: Joi.string().required(),
            idPoll: Joi.string().required(),
        }),
    }),    
        
}