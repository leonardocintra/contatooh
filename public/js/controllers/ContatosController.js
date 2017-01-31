(function() {

    angular.module('contatooh').controller('ContatosController', {
        function($resource, $scope) {
            $scope.contatos = []
            $scope.filtro = ''

            var Contato = $resource('/contatos/:id');

            function buscaContatos() {
                Contato.query(
                    function(contatos) {
                        $scope.contatos = contatos
                    },
                    function(erro) {
                        console.log("Não foi possivel obter a lista de contatos")
                        console.log(erro)
                    }
                )
            }
            
            buscaContatos()
        }
    })
})()