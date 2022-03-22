var express = require('express');
var mongoose = require('mongoose');

const app = express();

// Import routes so that the express client can see them
require('../routes/api')(app);
//Connect mongoose to mongodb
mongoose.connect(process.env.MONGODB_URI);

const uri = "mongodb+srv://admin:admin@cluster0.ivgkh.mongodb.net/test"

console.log('Connecting to mongodb server...')
const client = new MongoClient(uri)

try {
    client.connect();
} catch (e) {
    console.error(e)
}

// Listen on port 3000, will eventually change to work with env variables
var server = app.listen(3000, function() {
    console.log('Listening on port ' + server.address().port);
})

module.exports = { client } 