const mongoose = require('mongoose');

// Schema necesita destructuración 
const { Schema } = mongoose;


// Se agrega el is_active para el borrado logico de datos 

const postSchema = new Schema({

        is_active: {
        type:Boolean,
        default: true, 
        },
        title: {
            type: String,
            required: true,
            trim: true,
        },

        body: {
            type: String,
            required: true,
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

const Post = mongoose.model('Post', postSchema);

module.exports = { Post, postSchema }