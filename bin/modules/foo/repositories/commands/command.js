'use strict'

const db = require('../../../../helpers/databases/mysql/db')

const postUser = async (data) => {

    try{

        let query = 'INSERT INTO users(username, email, password) VALUES ?'
        let values = [
            [
                [
                    data.username,
                    data.email,
                    data.password
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