(function() {

    const passport = require('passport')
    const GitHubStrategy = require('passport-github').Strategy

    module.exports = () => {

        passport.use(new GitHubStrategy({
            clientID: 'bf4424fb17717ae36f87',
            clienteSecret: 'c692f2f56a32aff3ee7b0af34e03ec277864ce0c',
            callbackURL: 'http://localhost:3000/auth/github/callback'
        }, function(accessToken, refreshToken, profile, done) {
            
        }))
    }

})()