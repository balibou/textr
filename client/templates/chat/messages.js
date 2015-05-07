// Template.messages.helpers({
//   'msgs':function(){
//     return ChatRooms.findOne({_id:this._id}).messages;
//   }
// });

Template.messages.helpers({
  msgs: function() {
    return Messages.find({roomId: this._id});
  }
});