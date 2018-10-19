const errors = require('restify-errors')

const errorRest = errors

const error = (httpErr = null,message = null, data = null, description = null)=>{
    return {
        err: true,
        httpErr,
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

const response = (data, extra = {}) => {
    let combine = Object.assign(data, extra)

    return combine
}

module.exports = {
    error,
    success,
    errorRest,
    response
}