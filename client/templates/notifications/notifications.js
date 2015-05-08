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
    var notifs = Notifications.find({userId: Meteor.userId(), read: false}).fetch().length;
    var i=0;
    for (i=0; i<notifs; i++){
      // console.log(notifsid.push(Notifications.find({userId: Meteor.userId(), read: false}).fetch()[i]._id));
      // var result = result + Notifications.update(notifsid, {$set: {read: true}});
      notifsid = Notifications.find({userId: Meteor.userId(), read: false}).fetch()[i]._id;
      console.log(notifsid);
      Notifications.update(notifsid, {$set: {read: true}});
    }
  }
});