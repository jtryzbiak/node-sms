define(['jquery', 'backbone', 'stickit'], function($, Backbone) {

  var SendMessageView = Backbone.View.extend({
    initialize: function(options) {
      this.vent = options.vent;
    },
    events: {
      'click button[type="submit"]' : 'send',
    },
    send: function(){
      var me = this;

      this.model.save({}, {
        success: function(model, response){
          me.vent.trigger('messageSent', model.get('conversationId'));
          model.reset();
        }
      });
    },
    bindings: {
      '[name="phoneNumber"]': 'phoneNumber',
      '[name="message"]' : 'message'
    },
    render: function(){
      this.stickit();
    }
  });

  return SendMessageView;
});