const errors = require('restify-errors')

/* Wrapper errorRest return data from restify-errors, you can read documentation 'The module ships with the following HttpErrors' in https://github.com/restify/errors */
/* errorRest handle all HttpErrors */
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