var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    errorhandler = require('errorhandler'),
    dotenv = require('dotenv').config();

var isProduction = process.env.NODE_ENV === 'production'

// create global app object    
var app = express();

// Import routes so that the express client can see them
//app.use(require('../routes/api')(app));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

if(!isProduction) {
    app.use(errorhandler())
}

// Connect to database
console.log('Connecting to mongodb server...')
try {
    mongoose.connect(process.env.MONGODB_URI)
    mongoose.set('debug', true)
    console.log('Connected to mongodb server...')
} catch (e) {
    console.error(e)
}

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found')
    err.status = 404
    next(err)
})

/// error handlers

// development error handler
// will print stacktrace

if(!isProduction) {
    app.use(function(err, req, res, next) {
        console.log(err.stack)

        res.status(err.status || 500) // 500: Internal Server Error

        res.json({'errors': {
            message: err.message,
            error: err
        }});
    });
}

// production error handler
// no stracktrace leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500) // 500: Internal Server Error
    res.json({'errors': {
        message: err.message,
        error: err
    }});
})

// Listen on port 3000, will eventually change to work with env variables
var server = app.listen(process.env.PORT || 3000, function() {
    console.log('Listening on port ' + server.address().port);
})