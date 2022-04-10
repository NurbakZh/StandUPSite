require('dotenv').config()
const express = require('express')
const models = require('./models/models')
const sequelize = require('./db')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const router = require('./routes/index')
const ErrorHandler = require('./middleware/ErrorHandlerMiddleware')
const path = require('path')
var http = require('http');
var fs = require('fs');
const {callback} = require("pg/lib/native/query");

const PORT = process.env.PORT || 8000
const PORT1 = parseInt(process.env.PORT)+1 || 8001

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)


//last one to be used
app.use(ErrorHandler)



const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()