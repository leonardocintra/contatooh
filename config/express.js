(function() {

    const express = require('express')
    const load = require('express-load')
    const bodyParser = require('body-parser')
    const cookieParser = require('cookie-parser')
    const session = require('express-session')
    const passport = require('passport')



    module.exports = function() {
        var app = express()
        
        // configuracao de ambiente
        app.set('port', 3000)

        // middleware
        app.use(express.static('./public'))
        app.set('view engine', 'ejs')
        app.set('views', './app/views')
        app.use(bodyParser.urlencoded({extended: true}))
        app.use(bodyParser.json())
        app.use(require('method-override')())

        app.use(cookieParser())
        app.use(session(
            { 
                secret: 'palmeiras nao tem mundial',
                resave: true,
                saveUninitialized: true
            }
        ))
        app.use(passport.initialize())
        app.use(passport.session())


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

})()