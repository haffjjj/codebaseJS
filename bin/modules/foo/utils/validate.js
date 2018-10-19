'use strict'

const validate = require('validate.js')
const wrapper = require('../../../helpers/utils/wrapper')

const validateConstraints = (payload, constraints) => {

    let res = validate(payload, constraints)

    if(!res){
        return wrapper.success()
    }
    else{
        return wrapper.error(new wrapper.errorRest.BadRequestError('data is not appropriate'), res)
    }

}

const postUser = (payload) => {
    let constraints = {
        username: {
            presence: true
        },
        email: {
            email: true,
            presence: true
        },
        password: {
            presence: true
        },
    }

    return validateConstraints(payload, constraints)
}

module.exports = {
    postUser
}