'use strict';

const jwt = require('jsonwebtoken')
const wrapper = require('../helpers/utils/wrapper')
const config = require('../infra/configs/globalConfig')

const authenticated = (req,res,next) => {
    const bearerHeader = req.headers['authorization']
    if(typeof bearerHeader !== 'undefined'){

        let bearer = bearerHeader.split(' ')

        jwt.verify(bearer[1], config.JWTSecret, function(err, decoded) {
            if(!err){
                req.tokenData = decoded
                next()
            }
            else{
                next(new wrapper.errorRest.InvalidCredentialsError('Unauthorized'))
            }
        });
    }
    else{
        next(new wrapper.errorRest.InvalidCredentialsError('Unauthorized'))
    }
}

const generateToken = (data) => {

    let rules = {
        expiresIn: '1 days'
    }

    return jwt.sign(data, config.JWTSecret, rules)
}

module.exports = {
    authenticated,
    generateToken
}