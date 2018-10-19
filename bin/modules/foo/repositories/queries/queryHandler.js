'use strict'

const query = require('./query')

const getUsers = async () => {
    return await query.getUsers()
}

module.exports = {
    getUsers
} 