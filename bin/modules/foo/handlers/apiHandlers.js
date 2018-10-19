'use strict'

const validate = require('../utils/validate')
const wrapper = require('../../../helpers/utils/wrapper')
const commandHandler = require('../repositories/commands/commandHandler')
const queryHandler = require('../repositories/queries/queryHandler')

const postUser = (req, res, next) => {

    const payload = req.body

    const sendResponse = async () => {
        let validateBody = validate.postUser(payload)

        if(validateBody.err){
            //if validate false
            next(validateBody.httpErr)
        }
        else{
            //if validate true 
            let result = await commandHandler.postUser(payload)

            if(result.err){
                next(result.httpErr)
            }
            else{
                //if res not err
                res.send(wrapper.response(payload, { id: result.data.insertId }))
            }
        }
    }
    return sendResponse()
}

const getUsers = (req, res, next) => {

    const sendResponse = async () => {
        let result = await queryHandler.getUsers()

        if(result.err){
            next(result.httpErr)
        }
        else{
            //if res not err
            res.send(wrapper.response(result.data))
        }
    }

    return sendResponse()
}

module.exports = {
    postUser,
    getUsers
}