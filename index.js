require('dotenv').config()
const { app, PORT } = require('./api')
const { MONGO_URI } = require('./config')  // Aqui por medio de destruccturacion accedemos al metodo MONGO_URI 
const  mongoose  = require('mongoose')

//mongoose CONNECT
mongoose.connect(MONGO_URI, 
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Conected to Database"))
    .catch((err) => console.log(`Error connecting to Database Error: ${err}`))

//burn
app.listen(PORT, () => {console.log(`Esta vivo!!! desde el puerto ${PORT}`)})