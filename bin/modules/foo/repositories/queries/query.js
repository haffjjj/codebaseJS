'use strict'

const db = require('../../../../helpers/databases/mysql/db')

const getUsers = async () => {

    try{

        let query = 'SELECT * FROM users'

        return await db.query(query)
    }
    catch(err){
        return err
    }

}

module.exports = {
    getUsers
}