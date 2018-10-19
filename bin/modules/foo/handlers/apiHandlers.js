'use strict'

const validate = require('../utils/validate')
const wrapper = require('../../../helpers/utils/wrapper')
const command = require('../repositories/commands/command')

const postUser = (req,res,next) => {

    const payload = req.body

    const sendResponse = async () => {
        let validateBody = validate.postUser(payload)

        if(validateBody.err){
            //if validate false
            next(validateBody.httpErr)
        }
        else{
            //if validate true
            let result = await command.postUser(payload)

            if(result.err){
                next(result.httpErr)
            }
            else{
                //if res not err
                res.send(result)
            }
        }
    }

    return sendResponse()
    
}

module.exports = {
    postUser
}