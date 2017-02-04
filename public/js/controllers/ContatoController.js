(function() {

    angular.module('contatooh').controller('ContatoController', 
        function($scope, $routeParams, Contato) {

            /** Scope que mostra o contato novo ou existente */
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
            } 
            else {
                $scope.contato = new Contato()
            }

            /** Scope salvar */
            $scope.salva = function() {
                $scope.contato.$save()
                    .then(function() {
                        $scope.mensagem = {texto: 'Salvo com sucesso'}
                        // limpa o formulario
                        $scope.contato = new Contato()
                        $scope.$broadcast('contatoSalvo')
                    })
                    .catch(function() {
                        $scope.mensagem = {texto: 'Não foi possivel salvar.'}
                    })
            }

            /** Lista os contatos para vincular numa emergencia */
            Contato.query(function(contatos) {
                $scope.contatos = contatos
            })


        }
    )

})()

