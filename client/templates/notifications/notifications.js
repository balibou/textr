Template.notifications.helpers({
  notificationCount: function(){

    if (Notification.permission !== "granted")
    Notification.requestPermission();  

    var count = 0;
    var query = Notifications.find({userId: Meteor.userId(), read: false});
    (function() {
      var initializing = true;
      query.observeChanges({
        addedBefore: function(id, notification, before) {
          if (!initializing) {
            console.log(count);
            var notification = new Notification('Notification', {
              icon: '',
              body: "Vous avez un nouveau message !"
            });
          }
        }
      });
      initializing = false;
    })();

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