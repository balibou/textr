Template.sidebar.helpers({
  'onlusr':function(){
    return Meteor.users.find({ "status.online": true , _id: {$ne: Meteor.userId()} });
  }
});

Template.sidebar.events({
  'click .user':function(){
    // Session.set('currentId',this._id);
    // console.log(Session.get('currentId'));

    var userId = this._id;
    
    // var result=ChatRooms.findOne({chatIds:{$all:[userId,Meteor.userId()]}});
    // if (result){
    //   Router.go('chatroom', {_id: result._id});
    // }
    // else{
    //   newRoom= ChatRooms.insert({chatIds:[userId , Meteor.userId()],messages:[]});
    //   Router.go('chatroom', {_id: newRoom._id});
    // }

    var res=ChatRooms.findOne({chatIds:{$all:[userId,Meteor.userId()]}});
    if(res){
      Session.set("roomid",res._id);
    }else{
      var newRoom= ChatRooms.insert({chatIds:[userId , Meteor.userId()],messages:[]});
      Session.set('roomid',newRoom);
    }
  }
});