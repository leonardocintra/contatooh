(function() {

    angular.module('meusComponentes', [])
        .directive('meuPainel', function() {
            let directive = {}

            directive.restrict = "EA"
            directive.scope = {
                titulo: '@'
            }

            directive.transclude = true
            directive.templateUrl = 'js/directives/meus-componentes/meu-painel.html'

            return directive
        })
        .directive('meuBotaoAviso', function() {
            let directive = {}

            directive.restrict = "E"
            directive.scope = {
                nome: '@',
                acao: '&'
            }
            directive.template = `
                <button ng-click="acao()" class="btn btn-danger">{{ nome }}</button>
            `
            return directive
        })
        .directive('meuFocus', function() {
            /**
            * O AngularJS processa diretivas em duas fases. A primeira é a compile
            phase. Nesta fase, o AngularJS transforma o template de nossas diretivas em
            elementos do DOM para, logo em seguida, adicioná-los no documento, sub-
            stituindo ou aprimorando elementos já existentes. Raramente interagimos
            com esta fase, pois ela foi criada para resolver problemas de performance
            quando utilizamos o mesmo template de origem (antes de compilar) várias
            vezes, como é o caso da diretiva ng-repeat . Toda compilação retorna uma
            função de link, o que caracteriza o início da segunda fase.
            A segunda fase é chamada de link phase. É nesta fase que o escopo da
            diretiva é criado, observações de mudanças de propriedades podem ser feitas,
            inclusive podemos ter acesso ao escopo criado e ao elemento do DOM ao
            qual a diretiva foi associada. É justamente o que precisamos para podermos
            atribuir o foco ao elemento:
             */

            let directive = {}

            directive.restrict = "A"
            directive.scope = {
                evento: '@'
            }

            directive.link = function(scope, element) {
                /**O primeiro parâmetro da função $on é o nome do evento que desejamos
                escutar, o segundo, uma função de callback executada toda vez que o evento é
                disparado. */
                scope.$on(scope.evento, function() {
                    element[0].focus()
                })
            }
            return directive
        })

})()