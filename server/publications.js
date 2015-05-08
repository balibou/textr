Meteor.publish("chatrooms",function(){
  return ChatRooms.find({});
});
Meteor.publish("onlusers",function(){
  return Meteor.users.find({"status.online":true},{username:1});
})

Meteor.publish('messages', function(){
  return Messages.find({});
});

// Meteor.publish('notifications', function() {
//   return Notifications.find();
// });
Meteor.publish('notifications', function() {
  return Notifications.find({userId: this.userId, read: false});
});