var config = function(app, express) {

  var path = require('path')
    , mongoose = require('mongoose');
  
   app.configure(function(){
    app.set('../views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.static(__dirname + '/../public'));
    app.use(app.router);
  });

  app.configure('dev', function(){
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
    mongoose.connect('mongodb://localhost/node_sms');
  });
 
};

module.exports = config;