requirejs.config({
  baseUrl: '../javascripts',
  paths: {
    'jquery': 'http://code.jquery.com/jquery-1.9.1.min',
    'backbone': 'vendor/backbone-min',
    'stickit': 'vendor/backbone.stickit.min',
    'underscore' : 'vendor/underscore-min'
  },
  shim: {
    'backbone' : {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    'underscore' : {
      exports: '_'
    },
    'vendor/bootstrap-min' : {
      deps: ['jquery']
    },
    'stickit' : {
      deps: ['backbone']
    }
  }
});

define(['jquery', 'app/app-view'], function($, AppView) {
 
  $(function(){
    var appView = new AppView({el: $('#app')});
    appView.render();
  });

});