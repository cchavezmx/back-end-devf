const mongoose = require('mongoose');

// Schema necesita destructuración 
const { Schema } = mongoose;


// Se agrega el is_active para el borrado logico de datos 

const pollSchema = new Schema({
    //borrado logico 
        is_active: {
        type:Boolean,
        default: true, 
        },
        title: {
            type: String,
            required: true,
        },
        pregunta1: {
            type: String,
            trim: true,
        },
        pregunta2: {
            type: String,
            trim: true,
        },
        pregunta3: {
            type: String,
            trim: true,
        },
        pregunta4: {
            type: String,
            trim: true,
        },
        pregunta5: {
            type: String,
            trim: true,
        },
        pregunta6: {
            type: String,
            trim: true,
        },
        pregunta7: {
            type: String,
            trim: true,
        },
        pregunta8: {
            type: String,
            trim: true,
        },
        pregunta9: {
            type: String,
            trim: true,
        },
        pregunta10: {
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

const Poll = mongoose.model('Poll', pollSchema);

module.exports = { Poll, pollSchema }