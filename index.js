const express = require('express')
var cors = require('cors')
require('dotenv').config()
const bodyParser = require('body-parser')
const mainRouter = require('./src/routes')
const ErrorHandler = require('./src/middleware/errorHandler')

const app = express()
const port = 4000

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use("/",mainRouter)

app.use('*',function(req, res) {
        res.status(404).json({
          status: 404,
           message: 'Invalid Request'
        });
  });

//Error Handling
app.use(ErrorHandler)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })