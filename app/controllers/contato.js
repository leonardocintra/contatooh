(function() {

    module.exports = function(app) {

        var Contato = app.models.contato
        var controller =  {};
        
        controller.listaContatos = function(req, res) {

            let promise = Contato.find().exec().then(
                function(contatos) {
                    res.json(contatos)
                }
            )
        }

        controller.obtemContato = function(req, res) {
            let _id = req.params.id;
            Contato.findById(_id).exec().then(
                function(contato) {
                    if (!contato) throw new Error ("Contato não encontrado")
                    res.json(contato)
                },
                function(erro) {
                    console.log(erro)
                    res.status(404).json(erro)
                }
            )
        }

        controller.removeContato = function(req, res) {
            let _id = req.params.id
            Contato.remove({"_id": _id}).exec().then(
                function() {
                    res.status(204).end() 
                },
                function(erro) { 
                    return console.error(erro)
                }
            )
        }

        controller.salvaContato = function(req, res) {
            /**   Um Model do Mongoose possui a função update , porém ela ape-
               nas atualiza o documento sem retorná-lo após a modificação. A função
               findByIdAndUpdate , além de atualizar, nos dá acesso ao documento
               atualizado. */

            let _id = req.body._id

            if (_id) {
                // IF = possui um id, é UPDATE
                Contato.findByIdAndUpdate(_id, req.body).exec().then(
                    function(contato) {
                        res.json(contato)
                    },
                    function(erro) {
                        console.error(erro)
                        res.status(500).json(erro)
                    }
                )
            } 
            else {
                // ELSE = não possui _id, é um INSERT
                Contato.create(req.body).then(
                    function(contato) {
                        res.status(200).json(contato)
                    },
                    function(erro) {
                        console.log(erro)
                        res.status(500).json(erro)
                    }
                )                
            }
        }

        return controller
    }

})()