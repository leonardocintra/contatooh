angular.module('contatooh').controller('ContatoController', 
    function($scope){
        $scope.total = 0;
        $scope.incrementa = function() {
            $scope.total++;
        };
});