const { celebrate, Joi, Segments } = require('celebrate')
const { getByID } = require('../services/UserService')


module.exports = {
    create: celebrate ({
        [Segments.BODY]: Joi.object().keys({
            title: Joi.string().required(),
            body: Joi.string().required(),
            date: Joi.date(),
            image: Joi.string(),
            permissions: Joi.string().valid('PUBLIC', 'PRIVATE')
        }),
    }),
    getById: celebrate ({
        [Segments.PARAMS]: Joi.object().keys({
            id: Joi.string().required(),
            idPost: Joi.string().required(),
        })
    }),
    getAllPost: celebrate ({
        [Segments.PARAMS]: Joi.object().keys({
            id: Joi.string().required(),
        })
    }),
    delete: celebrate ({
        [Segments.PARAMS]: Joi.object().keys({
            id: Joi.string().required(),
            idPost: Joi.string().required(),
        })
    }), // para PATCH debes debemos validar tanto los params como el body tambien estos no son requeridos
    patch: celebrate ({
        [Segments.PARAMS]: Joi.object().keys({
            id: Joi.string().required(),
            idPost: Joi.string().required(),
        }),
        [Segments.BODY]: Joi.object().keys({
            title: Joi.string(),
            body: Joi.string(),
            date: Joi.date(),
            image: Joi.string(),
            permissions: Joi.string().valid('PUBLIC', 'PRIVATE'),
            
        })
    })
}