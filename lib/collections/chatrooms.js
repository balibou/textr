ChatRooms = new Meteor.Collection("chatrooms");

ChatRooms.allow({
  'insert':function(userId,doc){
    return true;
  },
  'update':function(userId,doc,fieldNames, modifier){
    return true;
  },
  'remove':function(userId,doc){
    return false;
  }
});

Meteor.methods({
  messageInsert: function(messageAttributes) {
    check(Meteor.userId(), String);
    check(messageAttributes, {
      text: String
    });
    var user = Meteor.user();
    var message = _.extend(messageAttributes, {
      userId: user._id,
      name: user.username,
      createdAt: Date.now()/1000
    });
    // var chatId = ChatRooms.update({"_id":Session.get("roomid")},{$push:{messages:message}});
  }
});