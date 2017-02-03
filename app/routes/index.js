(function() {

    /**Não precisamos nos preocupar em associá-lo com o Express 
     * porque estamos utilizando o express-load , que já o carregará automaticamente */

    module.exports = function(app) {
        app.get('/', function(req, res) {
            
            let usuarioLogado = ''
            
            if (req.user) {
                usuarioLogado = req.user.login 
            }
            
            context = {
                usuarioLogado: usuarioLogado
            }

            res.render('index', context)
        })
    }

})()