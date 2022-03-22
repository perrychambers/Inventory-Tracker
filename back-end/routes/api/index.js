const client = require('../../src/server')

myStats = '{"name":"Perry", "age":24, "maidens":null}';

myStatsP = JSON.parse(myStats);

stat = myStatsP.name;

module.exports = function(app) {
    /**
     * Middleware Endpoint
     * This gets triggered on every GET endpoint that is called
     * We can log who gets data from the server.
     */
    app.use(function(req, res, next) {
        console.log(req.url, req.method, req.ip)
        next();
    })

    /**
     * Test endpoint for interacting with mongodb
     * We have some example data in there already that we can grab
     * This will grab a list of the database names 
     * Having trouble, adding an import to server creates a circular dependency...
     */
    app.get('/databases', async(req, res) => {
        var databaseList = await client.db().admin().listDatabases()

        console.log('Databases:')
        databaseList.forEach(db => console.log(` - ${db.name}`))

        JSON.stringify(databaseList)
        res.json({databases: databaseList})
    })

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