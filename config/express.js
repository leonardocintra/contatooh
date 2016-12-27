var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');


module.exports = function() {
    var app = express();
    
    // configuracao de ambiente
    app.set('port', 3000);

    // middleware
    app.use(express.static('./public'));
    app.set('view engine', 'ejs');
    app.set('views', './app/views');
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(require('method-override')());

    /*
    Pasta padrão
        O parâmetro {cwd: ‘app’} foi necessário para mudar o diretório
    padrão, pois a função procura as pastas no diretório raiz contatooh e
    precisamos que ela considere a pasta contatooh/app .
    */
    load('models', {cwd: 'app'})
        .then('controllers')
        .then('routes')
        .into(app);

    return app;
};