define(['jquery', 'backbone', 'models/send-message', 'views/send-message'], function($, Backbone, SendMessageModel, SendMessageView) {

  var AppView = Backbone.View.extend({
    createEvents: function() {
      this.vent = _.extend({}, Backbone.Events);
      
      this.vent.on('messageSent', function(){
        console.log('messageSent');
      });

    },
    createSubViews: function(){
        // send message view
        this.sendMessageModel = new SendMessageModel();

        this.sendMessageView = new SendMessageView({
          model: this.sendMessageModel, 
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

  return AppView;
});