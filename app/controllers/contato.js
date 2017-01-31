var contatos = [
    {_id: 1, nome: 'Contato exemplo 1', email: 'exemplocontato1@gmail.com'},
    {_id: 2, nome: 'Contato exemplo 2', email: 'exemplocontato2@gmail.com'},
    {_id: 3, nome: 'Contato exemplo 3', email: 'exemplocontato3@gmail.com'},
    {_id: 4, nome: 'Contato exemplo 4', email: 'exemplocontato4@gmail.com'},
    {_id: 5, nome: 'Contato exemplo 5', email: 'exemplocontato5@gmail.com'},

]

module.exports = function() {
    var controller =  {};
    
    controller.listaContatos = function(req, res) {
        res.json(contatos);
    };

    controller.obtemContato = function(req, res) {
        console.log(req.params.id);
    };

    controller.removeContato = function(req, res) {
        var idContato = req.params.id;

        contatos = contatos.filter(function(Contato) {
            return contatos._id != idContato;
        });
        res.status(204).end();
    }

    return controller;
}