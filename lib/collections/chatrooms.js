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
  chatroomsCheck: function(messageAttributes){
    check(Meteor.userId(), String);
    check(messageAttributes, {
      userId: String
    });
    var user = Meteor.user();
    var chatroom = _.extend(messageAttributes, {
      monuserId: user._id
    });

    var chatroomId = ChatRooms.findOne({chatIds:{$all:[chatroom.userId , chatroom.monuserId]}});
    if (chatroomId){
      console.log(chatroomId._id);
      return {
        _id: chatroomId._id
      }
    }else{
    var chatroomId = ChatRooms.insert({chatIds:[chatroom.userId , chatroom.monuserId],messages:[]});
    console.log(chatroomId);
      return {
        _id: chatroomId
      }
    }
  }
});

Meteor.methods({
  messageInsert: function(messageAttributes) {
    check(Meteor.userId(), String);
    check(messageAttributes, {
      text: String,
      roomId: String
    });
    var user = Meteor.user();
    var message = _.extend(messageAttributes, {
      userId: user._id,
      name: user.username,
      createdAt: Date.now()/1000
    });

    return {
      message: message
    };
  }
});