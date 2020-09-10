const { Post } = require('../models')



module.exports = {
    
    // Metodo para crear post
    // a diferencia del otro Servicio donde se crean los datos a la base de datos de mongoose,
    // aqui no hacemos el save, ya que que queremos es esta informacion no se guarde dentro de la 
    // instancia de POST si no en la de USER. es por eso que no lo salvamos

    create: (body) => {
        const newPost = new Post(body)
        return newPost
    },
    getById: (user, idPost) => {
        const post = user.encuestas.id(idPost) // <= Atributos de Objeto 
            if(post.is_active === false){
                return false
            }else
           return post
    },
    getAllPost: (user) => {
        const allPost = user.encuestas.filter((post) => post.is_active === true)
        return allPost 
    },
    delete: (user, idPost) => {
        const postDelete = delete user.encuestas.filter(post => {
            if(post._id.toString() === idPost){
                delete post
            }
    })
    return postDelete
    },
    patch: (user, idPost, body) => {
        const updatePosts = user.encuestas.map(post => {
            if(post._id.toString() === idPost){
                const update = Object.assign(post, body) //<== El assign sirve para actulizar los datos
                return update
            }
            return post
        })
        user.posts = updatePosts
        return user.save();
    },


}



