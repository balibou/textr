Notifications = new Mongo.Collection('notifications');

Notifications.allow({
  update: function(userId, doc, fieldNames) {
    return fieldNames.length === 1 && fieldNames[0] === 'read';
  }
});

createMessageNotification = function(message) {
  var chatroom = ChatRooms.findOne(message.roomId);
  if (message.userId !== chatroom.chatIds[0]) {
    Notifications.insert({
      userId: chatroom.chatIds[0],
      chatroomId: chatroom._id,
      messageId: message._id,
      read: false
    });
  }
  else if (message.userId !== chatroom.chatIds[1]) {
    Notifications.insert({
      userId: chatroom.chatIds[1],
      chatroomId: chatroom._id,
      messageId: message._id,
      read: false
    });
  }
};