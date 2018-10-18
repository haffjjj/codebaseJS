const validate = require('../utils/validate')
const wrapper = require('../../../helpers/utils/wrapper')

const fooHandler = (req,res,next) => {

    const payload = req.body

    const sendResponse = () => {
        let validateBody = validate.validateFoo(payload)

        if(validateBody.err){
            //if validate false
            next(new wrapper.errorRest.BadRequestError(validateBody.message))
        }
        else{
            //if validate true
            res.send('work')
            next()
        }
    }

    return sendResponse()
    
}

module.exports = {
    fooHandler
}