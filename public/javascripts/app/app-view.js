define(['jquery', 'backbone', 'app/models/send-message', 'app/views/send-message']
  ,function($, Backbone, SendMessageModel, SendMessageView) {

  var AppChrome = Backbone.View.extend({
    createEvents: function() {
      this.vent = _.extend({}, Backbone.Events);
      
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
    },
    initialize: function(){
      this.createEvents();
      this.createSubViews();
    },
    render: function() {
      this.sendMessageView.render();
    }
  });

  return AppChrome;
});