Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() { 
    return [Meteor.subscribe("chatrooms"), Meteor.subscribe("onlusers")]
  }
});

Router.route('/', {name: 'chat'});