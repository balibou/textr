Template.sidebar.helpers({
  'onlusr':function(){
    return Meteor.users.find({ "status.online": true , _id: {$ne: Meteor.userId()} });
  }
});

Template.sidebar.events({
  'click .user':function(){
    Session.set('currentId',this._id);
    console.log(Session.get('currentId'));
  //   var res=ChatRooms.findOne({chatIds:{$all:[this._id,Meteor.userId()]}});
  //   if(res){
  //     Session.set("roomid",res._id);
  //   }else{
  //     var newRoom= ChatRooms.insert({chatIds:[this._id , Meteor.userId()],messages:[]});
  //     Session.set('roomid',newRoom);
  //   }
  }
});