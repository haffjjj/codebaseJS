const errors = require('restify-errors')

const errorRest = errors

const error = (message = null, data = null, description = null)=>{
    return {
        err: true,
        data,
        message,
        description
    }
}

const success = (message = null, data = null, description = null)=>{
    return {
        err: false,
        data,
        message,
        description
    }
}

module.exports = {
    error,
    success,
    errorRest
}