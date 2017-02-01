var lstContatoTemp = [
    {_id: 1, nome: 'Contato Hebreu 1', email: 'exemplocontato1@gmail.com'},
    {_id: 2, nome: 'Maria exemplo 2', email: 'exemplocontato2@gmail.com'},
    {_id: 3, nome: 'Contato Laranja 3', email: 'exemplocontato3@gmail.com'},
    {_id: 4, nome: 'Ronaldo Camelo 4', email: 'exemplocontato4@gmail.com'},
    {_id: 5, nome: 'Contato Araujo 5', email: 'exemplocontato5@gmail.com'},

]

module.exports = function() {
    var controller =  {};
    var ID_CONTATO_INC = 5;
    
    controller.listaContatos = function(req, res) {
        res.json(lstContatoTemp);
    };

    controller.obtemContato = function(req, res) {
        var idContato = req.params.id;
        var contato = lstContatoTemp.filter(function(contato) {
            return contato._id == idContato;
        })[0];
        contato ? res.json(contato) : res.status(404).send('Contato não encontrado');
    };

    controller.removeContato = function(req, res) {
        var idContato = req.params.id;

        lstContatoTemp = lstContatoTemp.filter(function(contato) {
            return contato._id != idContato;
        });
        res.status(204).end();
    };

    controller.salvaContato = function(req, res) {
        var contato = req.body;
        lstContatoTemp = contato._id ? atualiza(contato) : adiciona(contato);
        res.json(contato);
    };

    function adiciona(contatoNovo) {
        contatoNovo._id = 10 + ID_CONTATO_INC;
        lstContatoTemp.push(contatoNovo);
        return contatoNovo;
    }

    function atualiza(contatoAlterar) {
        lstContatoTemp = lstContatoTemp.map(function(contato) {
            if (contato._id == contatoAlterar._id) {
                contato = contatoAlterar;
            }
            return contato;
        });
        return contatoAlterar;
    }

    return controller;
}