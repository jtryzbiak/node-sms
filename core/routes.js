 var routes = function(app) {

    app.get('/', require('../api/index').execute);

    app.post('/message/send', require('../api/message.send').execute);
 };

 module.exports = routes;
