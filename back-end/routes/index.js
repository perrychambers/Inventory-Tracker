var router = require('express').Router();
var mongoose = require('mongoose');

router.use('/api', require('.'))
    
/**
 * Middleware Endpoint
 * This gets triggered on every GET endpoint that is called
 * We can log who gets data from the server.
 */
router.use(function(req, res, next) {
    console.log(req.url, req.method, req.ip)
    next();
})

 
router.get('/', function (req, res) {
    res.send('Successful response.');
})

/**
 * Test endpoint for interacting with mongodb
 * We have some example data in there already that we can grab
 * This will grab a list of the database names 
 * Having trouble, adding an import to server creates a circular dependency...
 */
router.get('/databases', async(req, res) => {

})

router.get('/home', (req, res) => {
    var time = new Date();
    res.json({date: time});
})

router.post('/addItem', (req, res) => {
    // DB Query here with req object
    // name: req.name
    // item: req.item
})

module.exports = router;