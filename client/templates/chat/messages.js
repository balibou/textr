Template.messages.helpers({
  'msgs':function(){
    if(Session.get('roomid')){
      var result=ChatRooms.findOne({_id:Session.get('roomid')});
      return result.messages;
    }
  }
});