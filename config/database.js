(function () {

    const mongoose = require('mongoose')

    module.exports = function(uri) {
        
        mongoose.connect(uri, {server: { poolSize: 15}})

        mongoose.connection.on('connected', () => console.log(`Mongoose! Conectado em ${uri}`))
        mongoose.connection.on('disconnected', () => console.log(`Mongoose! Desconectado de ${uri}`))
        mongoose.connection.on('error', () => console.log(`Mongoose! Erro na conexão: ${uri}`))

        process.on('SIGINT', () => {
            mongoose.connection.close(() => {
                console.log('Mongoose! Desconectado pelo terminio da aplicação.')
                process.exit(0)
            })
        })

    }

})()