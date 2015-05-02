Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() { 
    return [Meteor.subscribe("chatrooms"), Meteor.subscribe("onlusers")]
  }
});

var requireLogin = function() {
  if (! Meteor.user()) {
    if (Meteor.loggingIn()) {
      this.render(this.loadingTemplate);
    } else {
      this.render('accueil');
    }
  } else {
    this.next();
  }
}

Router.route('/', {name: 'chat'});
Router.onBeforeAction(requireLogin, {only: 'chat'});