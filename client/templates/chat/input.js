// Template.input.helpers({
//   'msgs':function(){
//     if(Session.get('roomid')){
//       return true;
//     }
//   }
// });

Template.input.events({
  'submit form' : function (e,template) {
    e.preventDefault(); //ne marche pas ?
    e.stopPropagation();

    var message ={
      text: e.target.message.value,
      roomId: template.data._id
    };

    // Meteor.call('messageInsert', message, function(error, result) {
    //   if (error){
    //     return alert(error.reason);
    //   }
    //   var chatId = ChatRooms.update({"_id":message.roomId},{$push:{messages:result.message}});
    // });

    Meteor.call('messageInsert', message, function(error, messageId) {
      if (error){
        throwError(error.reason);
      }
      e.target.message.value = "";
    });
  }
});