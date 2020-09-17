const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const PORT = process.env.PORT  || 4000
const app = express()
const { showDate } =require('../middlewares')

const { errors } =require('celebrate')

// morgan para log de la consola 
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

// Pasamos los midelware
app.use(cors()) // Con cors podemos asegurar que direcciones estan autorizadas para poder hacer la peticion a nuestro servidor 
app.use(express.urlencoded({ extended: true }))
app.use(express.json({extended: true}))
app.use(showDate)

// Mensaje en el index 
app.get('/', (req, res) => res.send(`Hola: ${req.date}`))

// add Index de la vista de Router
// aqui podemos agregar la ruta predeterminada. Esto puede servir para hacer un cambio de versiones dentro de nuestra estrutura.
// app.use('/api/v1', require('../router/'))

app.use(require('../router/'))


app.use(errors()) // agrega el error en el json de la consulta. 

// Exportamos los modulos de la app y el puerto de la aplicación 
module.exports = { app, PORT }