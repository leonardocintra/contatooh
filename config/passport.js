(function() {

    const passport = require('passport')
    const GitHubStrategy = require('passport-github').Strategy
    const mongoose = require('mongoose')


    module.exports = () => {

        const Usuario = mongoose.model('Usuario')

        passport.use(new GitHubStrategy({

            clientID: 'suaClientIdAqui',
            clienteSecret: 'suaSecretKeyAqui',
            callbackURL: 'http://localhost:3000/auth/github/callback'

        }, function(accessToken, refreshToken, profile, done) {
            Usuario.findOrCreate(
                { "login": profile.username },
                { "nome": profile.username} ,
                function (erro, usuario) {
                    if (erro) {
                        console.log(erro)
                        return done(erro)
                    }
                    return done(null, usuario)
                }
            )

        }))

        /**
         * Chamando apenas UMA vez e recebe o usuario em nosso banco disponibilizado
         * pelo callback da estrategia de autenticacao. Realizara a serializacao apenas do
         * ObjectId do usuario na sessao
         */

        passport.serializeUser(function(usuario, done) {
            done(null, usuario._id)
        })

        passport.deserializeUser(function(id, done) {
            Usuario.findById(id).exec().then(
                function(usuario) {
                    done(null, usuario)
                }
            )
        })
    }

})()