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
  chatroomsCheck: function(chatroomsAttributes){
    check(Meteor.userId(), String);
    check(chatroomsAttributes, {
      userId: String
    });
    var user = Meteor.user();
    var chatroom = _.extend(chatroomsAttributes, {
      monuserId: user._id
    });

    var chatroomId = ChatRooms.findOne({chatIds:{$all:[chatroom.userId , chatroom.monuserId]}});
    if (chatroomId){
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