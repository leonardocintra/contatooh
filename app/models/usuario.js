(function() {

    const mongoose = require('mongoose')
    const findOrCreate = require('mongoose-findorcreate')


    module.exports = () => {
        const schemaUsuario = mongoose.Schema({
            login: {
                type: String,
                required: true,
                index: {
                    unique: true
                }
            },
            nome: {
                type: String,
                required: true
            },
            inclusao: {
                type: Date,
                default: Date.now
            }
        })

        schemaUsuario.plugin(findOrCreate)
        return mongoose.model('Usuario', schemaUsuario)
    }

})()