const mongoose = require('mongoose');

// Schema necesita destructuración 
const { Schema } = mongoose;


// Se agrega el is_active para el borrado logico de datos 

const encuestaSchema = new Schema({
    //borrado logico 
        is_active: {
        type:Boolean,
        default: true, 
        },
        pregunta1: {
            type: String,
            trim: true,
        },
        pregunta1: {
            type: String,
            trim: true,
        },
        pregunta1: {
            type: String,
            trim: true,
        },
        pregunta1: {
            type: String,
            trim: true,
        },
        pregunta1: {
            type: String,
            trim: true,
        },
        pregunta1: {
            type: String,
            trim: true,
        },
        pregunta1: {
            type: String,
            trim: true,
        },
        pregunta1: {
            type: String,
            trim: true,
        },
        pregunta1: {
            type: String,
            trim: true,
        },
        date: {
            type: Date,
            dafault: Date.now(), 
        },
        permissions: {
            type: String, 
            enum: ['PUBLIC', 'PRIVATE'],
            default: 'PUBLIC',
        },
    })

const Encuesta = mongoose.model('Encuesta', encuestaSchema);

module.exports = { Encuesta, encuestaSchema }