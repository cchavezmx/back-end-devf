const mongosse = require('mongoose')
const timestamp = require('mongoose-timestamp')
const bcrypt = require('bcrypt')
const { postSchema } = require('../models/Post')
const { pollSchema } = require('../models/Poll')

const SALT_WORK_FACTOR = 10
const { Schema } = mongosse // con destructuracion 


// LOS SCHEMAS SIEMPRE CON MAYUSCULAS 

const userSchema = new Schema({
    is_active: {
        type:Boolean,
        default: true, 
    },
    first_name: {
        type: String,
        required: true,
        trim: true,
    },
    last_name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    }, // AGREGAMOS SCHEMA EMBEBIDO DE POST BASICO DESDE OTRO ARCHIVO. 
    polls: [pollSchema],
    posts: [postSchema],
});

// 1) se instala npm install mongoose-timestamp
// 2) se agrega el plugin a Schema creado 
// timestamp nos crea UpadteAt y CreateAT que es la hora y dia en que se crea el el post 
userSchema.plugin(timestamp)

// hasheo de la contraseña 
// se utiliza el metodo de save para asegurar que solo en la creacion se crea el hash para la contraseña


userSchema.pre('save', function(next) {
    const user = this;

    // solo genearmos el hash si el usuario modifica la contraseña
    if(!user.isModified('password')) return next();

    // Generamos la SALT
    return bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
       if(err) return next(err);
    
    // hasho de password usando el factor salt
    return bcrypt.hash(user.password, salt, function (errHash, hash){
        if(errHash) return next(errHash);

        // sobre escribimos el valor de la contraseña con el hash 
        user.password = hash;
        return next() // le mandamos el next al finalizar todo el haseo 
    });
    });
});


// de declara en una variable el Schema 
const User = mongosse.model('User', userSchema, 'Users');


module.exports = {
    User 
}