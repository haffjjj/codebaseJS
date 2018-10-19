'use strict'

const models = require('./commandModel')
const command = require('./command')

const postUser = async (payload) => {
    let data = models.users

    data.email = payload.email,
    data.password = payload.password,
    data.username = payload.username

    return await command.postUser(data)
}

module.exports = {
    postUser
} 