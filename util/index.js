const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

// Se integra la variable de JWT_SECRET en el archivo de env no se tiene que declarar en este archivo
// la configuracion del env

module.exports = {  
    comparePassword: (userPassword, reqPassword) => {
      return bcrypt.compareSync(reqPassword, userPassword)

    }, // TOKEN CON CADUCIDAD DE 1 HORA 
    createToken: (user) => {
        const payload = {
            id: user._id,
            email: user.email,
            first_name: user.first_name,
            exp: Math.floor(Date.now() /1000 + (60*60),)
        }
        try {
            const token = jwt.sign(payload, process.env.JWT_SECRET);
            return token
        } catch (error) {
            return undefined;
        }
    },
}