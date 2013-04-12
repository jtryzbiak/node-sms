module.exports = function(){

  var mongoose = require('mongoose')
    , Conversation = mongoose.model('Conversation');

  //private methods
  var execute
    , sendMessage
    , findConversation
    , createConversation
    , createOrEditConversation;

  sendMessage = function(req, next) {
    console.log('i need to send this message');
    next();
  };

  createOrEditConversation = function(req, next) {

    Conversation.findOne({
      'owner' : req.body.ownerId, 
      'conversationWith' : req.body.messageTo
    }, function(err, conversation) {

      console.log('e: ' + err);
      console.log(conversation);
      
      if(conversation == null) { 
        return createConversation(req, next);
      }

      editConversation(req, conversation, next);
    });
  }

  editConversation = function(req, conversation, next) {
    
    conversation.messages.addToSet({
      to: req.body.messageTo,
      from: req.body.ownerPhonenNumber,
      body: req.body.message
    });

    conversation.save(function(e) {
      next(conversation._id);
    });
  };

  createConversation = function(req, next) {

    var conversation = new Conversation({
      owner : req.body.ownerId,
      conversationWith : req.body.messageTo,
      messages : [{
        to: req.body.messageTo,
        from: req.body.ownerPhoneNumber,
        body: req.body.message
      }]
    });

    conversation.save(function(err){
      next(conversation._id);
    });
  };

  execute = function(req, res) {
    var data = {}, 
        afterConversationFound,
        afterMessageSent;

    afterMessageAppended = function(conversationId){
      data.conversationId = conversationId;
      sendMessage(req, afterMessageSent);
    };

    afterMessageSent = function() {
      res.json(data);
    };

    return createOrEditConversation(req, afterMessageAppended);
  }

  return {
    execute: execute
  };

}();
