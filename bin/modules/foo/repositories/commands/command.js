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

        return await db.query(query, values)
    }
    catch(err){
        return err
    }

}

module.exports = {
    postUser
}