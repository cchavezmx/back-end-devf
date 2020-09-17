const { UserService } = require('../services/')
const { comparePassword, createToken } = require('../util/')


module.exports = {
   create: async (req, res) => {
       const { email } = req.body
    try {
        // validar Usuario
        const userExist = await UserService.findByEmail(email)
        
        userExist === true
            ? res.status(409).json({message: "El usuario ya existe"})
            : await UserService.create(req.body)
        res.status(201).json(newUser)
    } catch (err) {
        console.log(err)
        res.status(401).json({message: err})
    }
},
    get: async (_, res) => {
        try {
            const allUser = await UserService.get()
            res.status(200).json(allUser)
        } catch (err) {
            res.status(400).json(err)
        }
    },
    getByID: async (req, res) =>{
        try {
            const user = await UserService.getByID(req.params.id) // Nos aseguramos de llevar el usuario Unico
            res.status(200).json(user)
        } catch (error) {
            res.status(401).json(console.log(error))
        }
    },

    patch: async (req, res) => {
        try {
            // 1) Verificamos si existe el id
            const user = await UserService.getByID(req.params.id)             
            !user 
                ? res.status(404).json({ message: "El usario no existe"})
                : await UserService.patch(user, req.body)
            // 2) Pasamos el usuario a la funcion patch

            res.status(200).json(userPatch)
        } catch (error) {
            res.status(401).json(console.log(error))
        }
    },
    delete: async (req, res) => {
        try {
            const delUser = await UserService.delete(req.params.id)
            res.status(201).json(delUser)
        } catch (error) {
            res.status(404).json(error)
        }
    },
    signup: async (req, res) => {
        const { email } = req.body
        try {
        //1) verificar que no exista el usuario
        const user = await UserService.findByEmail(email)
        // Si el usuario existe mandamos un mensaje de error
        if (user){
            res.status(405).json({ message: "El usuario ya existe"})
        }else{
        // En caso de no existir lo va a crear 
        const userNew = await UserService.signup(req.body)
        if(!userNew) res.status(404).json({ message: 'Error en el body'})
        userNew.password = undefined
        res.status(200).json(userNew) 
        }

        } catch (error) {
            res.status(404).json(error)
        }
    },
    login: async (req, res) => {
        //1) Verificar que si existe el usuario 
        const { email, password } = req.body
        try {
        // Guradamos dentro de una variable el valor bolleano para saber si el email si existe dentro de nuestra base de datos
        const user = await UserService.findByEmail(email)
        
        // Si el usuario no existe, mandamos un error
        if(!user) res.status(409).json({ message: 'Error en las credenciales' })

        // verificamos la contraseña
        const isValid =  comparePassword(user.password, password)
        if(!isValid) res.status(404).json({ message: "Error en las crendeciales"})

        // Generamos el Token
        const token = createToken(user);
        console.log('aqui va un token' + token)
        if(!token) res.status(500).json({message: 'Error al generar token'})

        //verificamos que el token sea real
        // Si el las credenciales son correctas y se genero el token, entonces damos entrada.
        res.status(201).json({ message: 'Login successful', token: token })

        } catch (err){
            res.status(400).json(console.log(err))
        }    
    }
}