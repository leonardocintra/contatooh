(function() {

    angular.module('contatooh').controller('ContatoController', 
        function($scope, $routeParams, $resource) {
            // aqui continua no plural, é a rota do lado do servidor
            var Contato = $resource('/contatos/:id')
            Contato.get(
                {id: $routeParams.contatoId},
                function(contato) {
                    $scope.contato = contato
                },
                function(erro) {
                    $scope.mensagem = { texto: 'Não foi possivel obter o contato.'}
                    console.log(erro)
                }
            )
        }
    )

})()

