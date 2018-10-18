'use strict'

const validate = require('validate.js')
const wrapper = require('../../../helpers/utils/wrapper')

const validateConstraints = (payload, constraints) => {

    let res = validate(payload, constraints)

    if(!res){
        return wrapper.success()
    }
    else{
        return wrapper.error('data is not appropriate', res)
    }

}

const validateFoo = (payload) => {
    let constraints = {
        email: {
            email: true,
            presence: true
        }
    }

    return validateConstraints(payload, constraints)
}

module.exports = {
    validateFoo
}