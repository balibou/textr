Template.notifications.onCreated(function () {

  if (Notification.permission !== "granted")
    Notification.requestPermission();

  var instance = this;
  var query = Notifications.find({userId: Meteor.userId(), read: false});
  instance.autorun(function () {
    
    query.observeChanges({
      added: function(id, notification) {
        var notification = new Notification('Notification', {
          icon: '',
          body: "Vous avez un nouveau message !"
        });
      }
    });
  });
});

Template.notifications.helpers({
  notificationCount: function(){
    return Notifications.find({userId: Meteor.userId(), read: false}).count();
  },
  notificationChatroomPath: function() {
    return Router.routes.chatroom.path({_id: this.chatroomId});
  }
});

Template.notifications.events({
  'click a': function() {
    var notifs = Notifications.find({userId: Meteor.userId(), read: false});
    notifs.forEach(function (notif) {
      Notifications.update(notif._id, {$set: {read: true}});
    });
  }
});