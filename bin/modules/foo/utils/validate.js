'use strict'

const validate = require('validate.js')
const wrapper = require('../../../helpers/utils/wrapper')

const validateConstraints = (payload, constraints) => {

    let res = validate(payload, constraints)

    if(!res){
        return wrapper.success()
    }
    else{
        return wrapper.error(new wrapper.errorRest.BadRequestError('Data is not appropriate'), res)
    }

}

const postUser = (payload) => {
    let constraints = {
        username: {
            presence: true,
            length: {
                minimum: 1
            }
        },
        email: {
            email: true,
            presence: true,
            length: {
                minimum: 1
            }
        },
        password: {
            presence: true,
            length: {
                minimum: 1
            }
        },
    }

    return validateConstraints(payload, constraints)
}

module.exports = {
    postUser
}