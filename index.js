console.time('Application total boot time was'); //logs front to back boot time on server thread
console.time('Modules were loaded in'); // logs load time of included modules
var fs = require('fs'); // this engine requires the fs module
var sql = require('mssql'); //include mssql to hit the SQL Servers for data
//var sql = require('mssql/nofix')  //change mssql to mssql-tedious "must be installed via npm install tds -s"
//var async = require('async'); //includes async library
var http = require("http"); //include http for web protocols
var express = require('express'); // express web framework for nodeJS
var router = express.Router(); // express request routing
var app = express(router);  // Creates a new Express application
var bodyParser = require('body-parser'); //body-parser used to read incoming request
var cluster = require('cluster'); // Include the cluster module to run node on each core
//var Firebase = require("firebase"); //include Firebase for cl-json
var session = require('express-session'); // express SessionID setter
var MSSQLStore = require('connect-mssql')(session); //sends session or ('express-session') to MSSQLStore
app.use(express.static(__dirname + "/public")); // sets the root directory name, and uses "/public" as the static folder from there
app.use(bodyParser.urlencoded({ extended: true })); //reads encoded urls
app.use(bodyParser.json()); //bodyParser allows JSON posts to be formatted for routing/queries/etc
console.timeEnd('Modules were loaded in');

// END MODULE DECLARATIONS //
//-------------------------------------------------------//

////   PROGRAM BEGINS AS:
//  CALLS OUT TO SQL SERVER - USING  NodeJS + node-MSSQL - Creates an obj "mongoString"
//  Pulled this code from a larger project. This is simply a quick server launch test.


//Add a basic route - default index.html
app.get('/', function (req, res) {
    res.writeHead(200,{'Content-Type' : 'text/html'});
    res.send('./public/index.html');
})

.get('/api', function (req,res){
    res.writeHead(200,{'Content-Type' : 'text/plain'});
    res.end("okay it works, now make it RAIN!")
});

var portNo = 3005;
app.listen(portNo);  // Bind to a port
console.timeEnd('Application total boot time was');
console.log('app listening on port: ' + portNo);
