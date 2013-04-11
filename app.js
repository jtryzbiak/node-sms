var express = require('express')
  , fs = require('fs');

process.env.NODE_ENV =  process.env.NODE_ENV || 'dev';

fs.readdirSync('./models').forEach(function (file) {
  require('./models/' + file);
});

var app = express();

// configuration
require('./core/config')(app, express);

// routes
require('./core/routes')(app);

var port = process.env.PORT || 3000;
app.listen(port);
console.log("Express server listening on port " + port);
