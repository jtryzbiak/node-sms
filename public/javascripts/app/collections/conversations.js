define(['backbone', 'app/models/conversation'], function(Backbone, Conversation){

  var Conversations = Backbone.Collection.extend({
    url: '/conversations',
    model: Conversation
  });

  return Conversations;
});