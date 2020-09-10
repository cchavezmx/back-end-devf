// Se agregan los Schemas dentro del index, asi por medio de destructuración podemos acceder a los elementos que index tenga y no por archivos

const { User } = require('./User'); // importamos el Schema. 
const { Post } = require('./Encuesta')

module.exports = {
    User, 
    Post,    
}