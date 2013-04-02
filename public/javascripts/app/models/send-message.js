define(['backbone', 'underscore'], function(Backbone, _){
  var SendMessageModel = Backbone.Model.extend({
    url: '/message/send',
    reset: function(){
      var me = this;
      _.each(_.keys(me.attributes), function(key){
        me.unset(key);
      });
    }
  });
  return SendMessageModel;
});