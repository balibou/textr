Template.input.helpers({
  'msgs':function(){
    if(Session.get('roomid')){
      return true;
    }
  }
});

Template.input.events({
  'submit form' : function (e,template) {
    e.preventDefault(); //ne marche pas ?

    var message ={
      text: e.target.message.value,
      roomId: Session.get("roomid")
      // roomId: template.data._id
    };

    Meteor.call('messageInsert', message, function(error, result) {
      if (error){
        return alert(error.reason);
      }
      var chatId = ChatRooms.update({"_id":Session.get("roomid")},{$push:{messages:result.message}});
      // var chatId = ChatRooms.update({"_id":roomId},{$push:{messages:result.message}});
    });
    
    e.target.message.value = "";
  }
});