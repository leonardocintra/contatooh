(function() {

    const mongoose = require('mongoose')

    module.exports = () => {
        const schemaContato = mongoose.Schema({
            nome: {
                type: String,
                required: true
            },
            email: {
                type: String,
                required: true,
                index: {
                    unique: true
                }
            }
        })

        // pode deixar comentado se quiser.
        // visualizar no terminal todos os comandos executados pelo Mongoose
        mongoose.set('debug', true)

        return mongoose.model('Contato', schemaContato)
    }

})()