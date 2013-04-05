 var routes = function(app) {

    app.get('/', require('../api/index').execute);

    app.post('/message/send', require('../api/sendMessage').execute);
 };

 module.exports = routes;
