var indexHandler = function() {

  var getConversations,
      getUserPhoneNumber,
      execute;

  getConversations = function(data, next) {
    data.conversations = [
      {
        id: 1,
        conversationWith: '111-222-3333',
        sentBy: '111-222-3333',
        timeStamp: new Date(2013, 03, 29),
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sem est, placerat eget mattis eu, accumsan eu nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos.'
      },
      {
        id: 2,
        conversationWith: '222-333-4444',
        sentBy: '555-555-5555',
        timeStamp: new Date(2013, 04, 03),
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sem est, placerat eget mattis eu, accumsan eu nisl.'
      }
    ];

    return next();
  };

  getUserPhoneNumber = function (request, data, next) {
    data.phoneNumber = "555-555-5555";
    return next(data);
  };
  
  execute = function(req, res) {
    var data = {},
        afterGetUserPhoneNumber,
        afterGetConversations;

    afterGetConversations = function() {
      res.render('index', data);
    };

    afterGetUserPhoneNumber = function() {
        return getConversations(data, afterGetConversations);
    };

    return getUserPhoneNumber(req, data, afterGetUserPhoneNumber);
  };

  return {
    execute: execute
  }

}();

module.exports = {
  execute: indexHandler.execute
};