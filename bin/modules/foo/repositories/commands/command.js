'use strict'

const db = require('../../../../helpers/databases/mysql/db')
const wrapper = require('../../../../helpers/utils/wrapper')

const postUser = async (payload) => {

    try{

        let query = 'INSERT INTO users(username, email, password) VALUES ?'
        let values = [
            [
                [
                    payload.username,
                    payload.email
                ]
            ]
        ]

        let result = await db.query(query, values)
        return wrapper.success(result)
    }
    catch(err){
        return wrapper.error(new wrapper.errorRest.InternalServerError())
    }

}

module.exports = {
    postUser
}