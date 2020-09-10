const { UserService, PostService } =require('../services');

module.exports = {
    create: async (req, res) => {
        const { id } =  req.params;
        const { body } = req; 
try {    
        // 1) traer usuario
        const user = await UserService.getByID(id)

        // 2) crear objeto de post
        const post = PostService.create(body)
        
        // 3) agregar el post al usuario 
        const userWhitPost = await UserService.addPost(user, post)

        // 4) Responder al cliente con el usuario y el nuevo POST
        res.status(200).json(userWhitPost);

    } catch (error) {
        res.status(500).json(error)
    }   
    },
    getById: async (req, res) => {
        const { id, idPost } = req.params

        try {
            // traer usuario 
            const user = await UserService.getByID(id)
                       
            // buscar post del usuario
            const post = PostService.getById(user, idPost)
            if(!post) res.status(404).json({ message: 'No existe post con ese ID' })
            
            // regresamos la busqueda en un res 
            res.status(200).json(post)
            
            
        } catch (error) {
            res.status(401).json(error)            
        }
    },
    getAllPost: async (req, res) => {
            const { id } = req.params

        try {
            // traer todos los posts del usuario
            const user = await UserService.getByID(id)

            const allPosts =  PostService.getAllPost(user)
            if(!allPosts) res.status(404).json({ message: 'Elementos no encontrados'})
            console.log(allPosts)

            res.status(200).json(allPosts)
            
        } catch (error) {
            res.status(404).json({message: 'Error inesperado'})
        }
    },
    delete: async (req, res) => {
           const { id, idPost } = req.params

           try {
                // traer Usuario 
            
            // traemos el usuario 
            const user = await UserService.getByID(id)
            if(!user) res.status(404).json({ message: 'El usuario no existe'})

            // buscamos el post 
            const post = await PostService.getById(user, idPost)
            if(!post) res.status(404).json({ message: 'El id del post no existe'})

            // actualizamos el post
            await PostService.patch(user, idPost, { is_active: false }); // se cambia el campo de is_active para hacer el borrado logico
                    
            // respondemos al cliente con los cambios realizados 
            res.status(204).json({ message: 'Post eliminado'})
            

           } catch (error) {
               res.status(404).json({ message: 'Error inesperado ' + error})
           }

    },
    patch: async (req, res) => {
        const  { id, idPost } = req.params;
        const { body } = req;

        try {
           
            // traemos el usuario 
            const user = await UserService.getByID(id)
            if(!user) res.status(404).json({ message: 'El usuario no existe'})

            // buscamos el post 
            const post = await PostService.getById(user, idPost)
            if(!post) res.status(404).json({ message: 'El id del post no existe'})

            // actualizamos el post
            const updatePost =  await PostService.patch(user, idPost, body);
                    
            // respondemos al cliente con los cambios realizados 
            res.status(200).json(updatePost.posts.id(idPost))

        } catch (error) {
            res.status(404).json({message: 'Surgio un error' + error})            
        }


    },
}