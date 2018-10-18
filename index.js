'use strict'

const app = require('./bin/app/server')
const config = require('./bin/infra/configs/globalConfig')

//listen server
app(config.port,()=>{
    console.log(`listen on port ${config.port}`)
})