(function() {

    angular.module('contatooh').controller('ContatosController', 
        function($resource, $scope) {
            $scope.contatos = []
            $scope.filtro = ''

            $scope.mensagem = {texto: ''}

            var Contato = $resource('/contatos/:id');

            function buscaContatos() {
                Contato.query(
                    function(contatos) {
                        $scope.contatos = contatos
                        $scope.mensagem = {}
                    },
                    function(erro) {
                        console.log("Não foi possivel obter a lista de contatos")
                        console.log(erro)
                        $scope.mensagem = { texto: "Não foi possivel obter a lista de contatos."}
                    }
                )
            }

            $scope.remove = function(contato) {
                console.log('Removendo o contato ' + contato._id)
                Contato.delete({id: contato._id},
                    buscaContatos(), 
                    function(erro) {
                        console.log('Erro: Não foi possivel remover o contato')
                        console.log(erro)
                        $scope.mensagem = { texto: "Não foi possivel remover o contato. "}
                    }
                )                
            }

            buscaContatos()
        }
    )

})()