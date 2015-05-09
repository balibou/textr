Template.notifications.helpers({
  notificationCount: function(){

    // if (Notification.permission !== "granted")
    // Notification.requestPermission();

    // if(Notifications.find({userId: Meteor.userId(), read: false}).count() > 0){
    //   var notification = new Notification('Notification', {
    //   icon: '',
    //   body: "Vous avez un nouveau message!",
    //   });
    // }

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