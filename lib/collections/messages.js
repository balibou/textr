Messages = new Mongo.Collection("messages");

Messages.allow({
  'insert':function(userId,doc){
    return true;
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

    // messageId = Messages.insert(message);
    // console.log(messageId);
    // return {
    //   message: message
    // };

    return Messages.insert(message);
  }
});