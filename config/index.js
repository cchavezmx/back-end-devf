const NODE_ENV = process.env.NODE_ENV || 'staging'


const config = {
    production: {
        MONGO_URI: `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-shard-00-00.oemvf.azure.mongodb.net:27017,cluster0-shard-00-01.oemvf.azure.mongodb.net:27017,cluster0-shard-00-02.oemvf.azure.mongodb.net:27017/produccion?ssl=true&replicaSet=atlas-ndjr5a-shard-0&authSource=admin&retryWrites=true&w=majority`        
    },
    staging: {
        MONGO_URI: `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-shard-00-00.oemvf.azure.mongodb.net:27017,cluster0-shard-00-01.oemvf.azure.mongodb.net:27017,cluster0-shard-00-02.oemvf.azure.mongodb.net:27017/staging?ssl=true&replicaSet=atlas-ndjr5a-shard-0&authSource=admin&retryWrites=true&w=majority`    
    },
    test: {
        MONGO_URI: `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-shard-00-00.oemvf.azure.mongodb.net:27017,cluster0-shard-00-01.oemvf.azure.mongodb.net:27017,cluster0-shard-00-02.oemvf.azure.mongodb.net:27017/test?ssl=true&replicaSet=atlas-ndjr5a-shard-0&authSource=admin&retryWrites=true&w=majority` 
    },
}

module.exports =  config[NODE_ENV];

/* con esta forma de exportar decimos que nos exporte solo la configuracion tenga el valor que le pasamos a la constante
    NODE_ENV, para este caso la constante NODE_ENV toma el valor de staging 
*/    

/*
MONGO_URI=mongodb://@cloneslacknb-shard-00-00.hkpqh.mongodb.net:27017,cloneslacknb-shard-00-01.hkpqh.mongodb.net:27017,cloneslacknb-shard-00-02.hkpqh.mongodb.net:27017/test2?ssl=true&replicaSet=atlas-nopia0-shard-0&authSource=admin&retryWrites=true&w=majority
JWT_SECRET=perro:loco2315_lo
*/