'use strict'

const mysql = require('mysql')
const config = require('../../../infra/configs/globalConfig')

const pool = mysql.createPool(config.getDevelopmentMysql)

const query = (query, values = []) => {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, conn) => {
            if (err) {
                reject(err)
            }
            else{
                conn.query(query, values, (err, res, field) => {
                    conn.release()
                    if(err){
                        reject(err)
                    }
                    else{
                        resolve(res)
                    }
                })
            }
        })
    })
}

module.exports = {
    query
}

