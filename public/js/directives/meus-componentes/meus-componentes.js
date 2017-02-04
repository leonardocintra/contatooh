(function() {

    angular.module('meusComponentes', []).directive('meuPainel', function() {
        let directive = {}

        directive.restrict = "EA"
        directive.scope = {
            titulo: '@'
        }

        directive.template = `
            <div class="panel panel-default">
                <div class="panel-heading">{{ titulo }}</div>
                <div class="panel-body">

                </div>
            </div>
        `

        return directive
    })

})()