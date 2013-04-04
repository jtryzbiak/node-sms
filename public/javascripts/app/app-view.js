define([
  'jquery', 
  'backbone',
  'app/models/send-message', 
  'app/views/send-message',
  'app/collections/conversations',
  'app/views/conversations',
  'app/templates/templates'],
function(
  $, 
  Backbone, 
  SendMessageModel, 
  SendMessageView, 
  ConversationCollection, 
  ConversationListView
) {

  var AppChrome = Backbone.View.extend({

    registerEvents: function() {
      this.vent.on('messageSent', function(conversationId){
        console.log(conversationId);
      });

    },
    createSubViews: function(){
        // send message view
        var sendMessageModel = new SendMessageModel();
        this.sendMessageView = new SendMessageView({
          model: sendMessageModel, 
          el: this.$el.find('#sendMessage'),
          vent: this.vent
        });

        //conversations view
        this.conversationCollection = new ConversationCollection(bootstrapData.conversations);
        this.conversationListView = new ConversationListView({collection: this.conversationCollection, el: this.$el.find('#conversations')});
    },
    initialize: function(){
      this.vent = _.extend({}, Backbone.Events);
      
      this.registerEvents();
      this.createSubViews();
    },
    render: function() {
      this.sendMessageView.render();
      this.conversationListView.render();
    }
  });

  return AppChrome;
});