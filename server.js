(function () {

    const http = require('http');
    const app = require('./config/express')();
    require('./config/database')('mongodb://localhost:27017/contatooh')

    http.createServer(app).listen(
        app.get("port"), function(){
            console.log('Contatooh - Express excutando na porta ' + app.get('port'))
        }
    )

})()
