module.exports = function() {

  var mongoose = require('mongoose'),
      User = mongoose.model('User'),
      Conversation = mongoose.model('Conversation');

  // private methods
  var getConversations,
      getUserPhoneNumber,
      execute;

  getConversations = function(data, next) {

    Conversation.list({ owner: data.currentUser._id }, function(err, conversations) {
      data.conversations = [];

      conversations.forEach(function(conversation){

        data.conversations.push({
          id: conversation._id,
          conversationWith : conversation.conversationWith,
          timeStamp : conversation.messages[0].created,
          body : conversation.messages[0].body
        });

      });

      return next();

    });
  };

  getUser = function (request, data, next) {
    User.findOne({'email' : 'testuser@foo.com'}, '_id phone_number', function(err, obj) {
        data.currentUser = obj;
        return next();
    });
  };
  
  execute = function(req, res) {
    var data = {},
        afterGetUser,
        afterGetConversations;

    afterGetConversations = function() {
      res.render('index', data);
      return;
    };

    afterGetUser = function() {
        return getConversations(data, afterGetConversations);
    };

    return getUser(req, data, afterGetUser);
  };

  return {
    execute: execute
  }
}();
