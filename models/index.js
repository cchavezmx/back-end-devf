// Se agregan los Schemas dentro del index, asi por medio de destructuración podemos acceder a los elementos que index tenga y no por archivos

const { User } = require('./User'); // importamos el Schema. 
const { Poll } = require('./Poll')
const { Post } = require('./Post')

module.exports = {
    User, 
    Poll, 
    Post,  
}