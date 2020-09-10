const moment = require('moment')
const jwt = require('jsonwebtoken')

module.exports = {
    showDate: (req, _, next) => {
        req.date = moment().format('MMM Do YYY, h:mm:ss a');
        console.log(`😜 Middlewares de fecha ${req.date}`)
        next()
    },
    verifyToken: (req, res, next) => {
        try {
            // 1) dentro del req.headers debemos tener el token generado dentro del login
            const { authorization } = req.headers; 

            // 2) Si este Token existe, vamos a separlo en un array y seleccionar solo el valor de token
            const token = authorization.split(' ')[1];

            // 3) una vez separado la string del valor del token la pasamos a verificar gracias al metodo que jwt tiene para eso 
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // 4) una vez terminados los pases anteriores, ahora le pasamos los valores de payload decodificados al req. 
            req.decoded = decoded;
            next();

        } catch (err) {

            // en caso de un error en los pasos anteriores , ese es el mensaje de erro que parecera. 
            res.status(401).json({ messege: 'Error de credenciales', err })
        }
    }
}