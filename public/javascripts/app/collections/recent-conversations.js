define(['backbone', 'app/models/recent-conversation'], function(Backbone, RecentConversation){

  var RecentConversations = Backbone.Collection.extend({
    url: '/conversations'
    model: RecentConversation
  });

  return RecentConversations;
});