'use strict'

const restify = require('restify')
const jwtHelper = require('../auth/jwtHelper')

const foo = require('../modules/foo/handlers/apiHandlers')

const app = (port,listen) => {
    let server = restify.createServer()

    /* cors setting */
    let cors = (req,res,next) => {
        res.header("Access-Control-Allow-Origin", "*")
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
        next()
    }

    server.use(cors)

    server.use(restify.plugins.authorizationParser())
    server.use(restify.plugins.acceptParser(server.acceptable))
    server.use(restify.plugins.bodyParser())
    server.use(restify.plugins.queryParser())

    server.listen(port,listen())


    /* routes */

    server.post('/users/signin', foo.signIn)
    server.post('/users', foo.postUser)
    server.get('/users', jwtHelper.authenticated, foo.getUsers)
    
    /* end routes */

}

module.exports = app
