var express = require('express');

const app = express();

require('../routes/api')(app);

// Listen on port 3000, will eventually change to work with env variables
var server = app.listen(3000, function() {
    console.log('Listening on port ' + server.address().port);
})

//module.exports = app;