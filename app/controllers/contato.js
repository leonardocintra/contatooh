(function() {

    module.exports = function(app) {

        var Contato = app.models.contato
        var controller =  {};
        
        controller.listaContatos = function(req, res) {

            var promise = Contato.find().exec().then(
                function(contatos) {
                    res.json(contatos)
                }
            )
        }

        controller.obtemContato = function(req, res) {
            var _id = req.params.id;
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
            var idContato = req.params.id;

            contatos = contatos.filter(function(contato) {
                return contato._id != idContato;
            });
            res.status(204).end();
        }

        controller.salvaContato = function(req, res) {
            var contato = req.body;
            contatos = contato._id ? atualiza(contato) : adiciona(contato);
            res.json(contato);
        }

        function adiciona(contatoNovo) {
            contatoNovo._id = 10 + ID_CONTATO_INC;
            contatos.push(contatoNovo);
            return contatoNovo;
        }

        function atualiza(contatoAlterar) {
            contatos = contatos.map(function(contato) {
                if (contato._id == contatoAlterar._id) {
                    contato = contatoAlterar;
                }
                return contato;
            });
            return contatoAlterar;
        }

        return controller
    }

})()