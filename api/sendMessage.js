var sendMessageHandler = function(){

  var execute,
      sendMessage;

  sendMessage = function(data, next) {
    data.conversationId = 1;
    next();
  }

  execute = function(req, res) {
    var data = {}, 
        afterSendMessage;

    afterSendMessage = function() {
      res.json(data);
      return;
    }

    return sendMessage(data, afterSendMessage);
  }

  return {
    execute: execute
  };

}();

module.exports = {
  execute: sendMessageHandler.execute
};

