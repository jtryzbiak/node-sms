define(['jquery', 'backbone', 'handlebars', 'app/models/conversation'], function($, Backbone, Handlebars, ConversationModel){

  var Conversation = Backbone.View.extend({
    tagName: 'li',
    className: 'well',
    events: {
      'click' : 'loadConversation'
    },
    loadConversation : function(){
      console.log(this.model.attributes);
    },
    render: function(){
      var template = Handlebars.templates["conversation"];
      this.$el.html(template(this.model.attributes));

      return this;
    }
  });

  var ConversationList = Backbone.View.extend({
    initialize: function(){
      this.views = [];
    },
    addOne: function(model) {
      var conversation = new Conversation({model: model});
      this.$el.append(conversation.render().el); 
    },
    addAll: function(){
      this.collection.forEach(this.addOne, this);
    },
    render: function() {
     this.addAll();
    }
  });

  return ConversationList;

});