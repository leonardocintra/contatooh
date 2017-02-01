/**
 * Teste de conexao no Mongo DB
 */

const MongoClient = require('mongodb').MongoClient
const ObjectId = require('mongodb').ObjectID

// fazer insert pelo shell e procurar um contato
var _idProcurado = new ObjectId('58920a68031e47a97f596109')

MongoClient.connect('mongodb://localhost:27017/contatooh', function(erro, db) {
    if (erro) throw err
    db.collection('contatos').findOne({ _id: _idProcurado }, function(erro, contato) {
        if (erro) throw err
        console.log(contato)
    })
})
