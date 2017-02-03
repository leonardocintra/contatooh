(function() {

    const passport = require('passport')
    const GitHubStrategy = require('passport-github').Strategy
    const mongoose = require('mongoose')


    module.exports = () => {

        const Usuario = mongoose.model('Usuario')
        const clientID = process.env.CLIENT_ID || 'bf4424fb17717ae36f87'
        const clientSecret = process.env.CLIENT_SECRET || 'c692f2f56a32aff3ee7b0af34e03ec277864ce0c'

        passport.use(new GitHubStrategy({

            clientID: clientID,
            clientSecret: clientSecret ,
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