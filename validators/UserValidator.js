const { celebrate, Joi, Segments } = require('celebrate');


module.exports = {
    create: celebrate ({
        [Segments.BODY]: Joi.object().keys({
            fristName: Joi.string().required(),
            lastName: Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string().required()
        })        
    }),
    getById: celebrate ({
        [Segments.PARAMS]: Joi.object().keys({
            id: Joi.string().required()
        })
    }),
    patch : celebrate ({
        // validamos que el id sea un string 
        [Segments.PARAMS]: Joi.object().keys({
            id: Joi.string().required()
        }),
        [Segments.BODY]: Joi.object().keys({
            fristName: Joi.string().required(),
            lastName: Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string().required() 
        })
    }), 
    login : celebrate ({
        [Segments.BODY]: Joi.object().keys({
            email: Joi.string().email().required(),
            password: Joi.string().required()
        })
    }),
    signup: celebrate ({
        [Segments.BODY]: Joi.object().keys({
            fristName: Joi.string().required(),
            lastName: Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string().required() 
        })
    })

    
}