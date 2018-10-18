'use strict'

const nconf = require('nconf')

nconf.env().file('config.json')

const configs = {
    port: nconf.get('PORT'),
    getDevelopmentMysql: nconf.get('DEVELOPMENT_MYSQL_DATABASE_CONFIG')
}
 
module.exports = configs