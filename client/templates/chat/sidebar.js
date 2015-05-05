Template.sidebar.helpers({
  'onlusr':function(){
    return Meteor.users.find({ "status.online": true , _id: {$ne: Meteor.userId()} });
  }
});

Template.sidebar.events({
  'click .user':function(){

    var chatroom ={
      userId: this._id
    };

    Meteor.call('chatroomsCheck', chatroom, function(error, result) {
      if (error){
        return alert(error.reason);
      }
      Router.go('chatroom', {_id: result._id});
    });
  }
});