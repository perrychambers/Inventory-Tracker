myStats = '{"name":"Perry", "age":24, "maidens":null}';

myStatsP = JSON.parse(myStats);

stat = myStatsP.name;

console.log(stat);

/**
 * Middleware Endpoint
 * This gets triggered on every GET endpoint that is called
 * We can log who gets data from the server.
 */

module.exports = function(app) {
    app.get('/', (req, res) => {
        res.send('Successful response.');
    })
    
    app.get('/home', (req, res) => {
        var time = new Date();
        res.json({date: time});
    })
    
    app.post('/addItem', (req, res) => {
        // DB Query here with req object
        // name: req.name
        // item: req.item
    })
}