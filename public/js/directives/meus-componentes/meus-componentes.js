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

})()