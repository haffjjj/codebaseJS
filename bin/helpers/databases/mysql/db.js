'use strict'

const mysql = require('mysql')
const config = require('../../../infra/configs/globalConfig')
const wrapper = require('../../utils/wrapper')

const pool = mysql.createPool(config.getDevelopmentMysql)

const query = (query, values = []) => {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, conn) => {
            if (err) {

                // reject(err)
                if (err.code === 'PROTOCOL_CONNECTION_LOST') {
                    httpErr = new wrapper.errorRest.ServiceUnavailableError('Database connection was closed')
                }
                else if (err.code === 'ER_CON_COUNT_ERROR') {
                    httpErr = new wrapper.errorRest.TooManyRequestsError('Database has too many connections')
                }
                else{
                    httpErr = new wrapper.errorRest.InternalServerError('Database errors')
                }

                reject(wrapper.error(httpErr))
            }
            else{
                conn.query(query, values, (err, res, field) => {
                    conn.release()
                    if(err){
                        reject(wrapper.error(new wrapper.errorRest.InternalServerError('Database errors')))
                    }
                    else{
                        resolve(wrapper.success('query success',res))
                    }
                })
            }
        })
    })
}

module.exports = {
    query
}

