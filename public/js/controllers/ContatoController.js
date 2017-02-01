(function() {

    angular.module('contatooh').controller('ContatoController', 
        function($scope, $routeParams, Contato) {

            if ($routeParams.contatoId) {
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
            } else {
                $scope.contato = new Contato()
            }

            $scope.salva = function() {
                $scope.contato.$save()
                    .then(() => {
                        $scope.mensagem = {texto: 'Salvo com sucesso'}
                        // limpa o formulario
                        $scope.contato = new Contato()
                    })
                    .catch(() => {
                        $scope.mensagem = {texto: 'Não foi possivel salvar.'}
                    })
            }
        }
    )

})()

