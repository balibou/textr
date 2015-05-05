Template.messages.helpers({
  'msgs':function(){
    return ChatRooms.findOne({_id:this._id}).messages;
  }
});