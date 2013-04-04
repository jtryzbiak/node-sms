 var routes = function(app, handlers) {

    app.get('/', function(req, res) {
      res.render('index', { 
        phone_number: '555-555-5555',
        conversations: [
          {
            id: 1,
            conversationWith: '111-222-3333',
            sentBy: '111-222-3333',
            timeStamp: new Date(2013, 03, 29),
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sem est, placerat eget mattis eu, accumsan eu nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos.',
          }
        ]
      });
    });

    app.post('/message/send', function(req, res) {
      res.json({ conversationId: 1 });
    });
 };

 module.exports = routes;
