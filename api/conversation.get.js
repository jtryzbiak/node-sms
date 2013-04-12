module.exports = function() {

  var mongoose = require('mongoose'),
      Conversation = mongoose.model('Conversation');

  var execute
    , getConversation;

  getConversation = function (id, next) {
    Conversation.findOne({'_id' : id}, function(err, conversation){
      next(conversation);
    })
  }

  execute = function (req, res) {
    var afterConversationRetrieved = function(conversation) {
      res.json(conversation);
    };

    return getConversation(req.params.id, afterConversationRetrieved);
  };

  return {
    execute: execute
  };

}();
