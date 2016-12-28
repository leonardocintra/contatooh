angular.module('contatooh').controller('ContatosController', 
    function($scope){
        $scope.total = 0;
        $scope.incrementa = function() {
            $scope.total++;
        };

        $scope.contatos = [
            {_id: 1, nome: 'Ronaldo', email: 'exemplocontato1@gmail.com'},
            {_id: 2, nome: 'Juliana', email: 'exemplocontato2@gmail.com'},
            {_id: 3, nome: 'Sara', email: 'exemplocontato3@gmail.com'},
            {_id: 4, nome: 'Humberto', email: 'exemplocontato4@gmail.com'},
            {_id: 5, nome: 'Diego', email: 'exemplocontato5@gmail.com'},

        ];

        $scope.filtro = "";
    }
);