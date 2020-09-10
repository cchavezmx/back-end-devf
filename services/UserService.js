const { User } = require('../models')

// aqui se ponen las funciones que hace cada parte del crud... 
// TALVEZ ES AQUI donde se ponen las validaciones. 

module.exports = {
    // creamos los usuarios a la base de datos 
    create: (body) => new User(body).save(),

    // Buscamos todos los usuarios en la base de datos
    get: () => User.find(),
                    // User.find({ is_active: true}) <== para el borrado logico dentro del shchema 

    // buscamos por id
    getByID: (id) => User.findById(id),
                    // User.find({ id, is_active: true}) <== para el borrado logico dentro del shchema 

    // patch: (id, body) => User.findByIdAndUpdate(id, body, { new: true }), 
    patch: (user, body) => {
        Object.assign(user, body);
        return user.save(); // con el metdo save, hacemos el haseo de la contraseña 
    },
    // el metodo exacto para solo borrar un elemento segun id
    delete: (id) =>  User.findByIdAndDelete(id), 
                         // User.find({ id, is_active: true}) <== para el borrado logico dentro del shchema 


    // buscamos si el email ya se encuentra en la base de datos con findOne traemos el resultado
    findByEmail: (email) => User.findOne({ email }),
             // User.find({ id, is_active: true}) <== para el borrado logico dentro del shchema 
       

    // Logica de signup
    signup: (body) => new User(body).save(),

    // adPost Usamos el metodo dentro de user.posts (ver modelo) y pushamos los datos del post ya conformado para que el post quede dentro del usuario
    addPost: (user, post) => {
        user.posts.push(post)
        return user.save();
    },
    addPoll: (user, poll ) => {
        user.polls.push(poll)
        return User.save
    }
 }