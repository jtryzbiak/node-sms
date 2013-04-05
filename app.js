var express = require('express')
  , http = require('http');

var app = express();

// configuration
require('./core/config')(app, express);

// routes
require('./core/routes')(app);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
