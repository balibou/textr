Template.input.helpers({
  'msgs':function(){
    if(Session.get('roomid')){
      return true;
    }
  }
});

Template.input.events({
  'submit form' : function (e) {
    e.preventDefault();

    var message ={
      text: e.target.message.value,
    };

    Meteor.call('messageInsert', message, function(error, result) {
      if (error){
        return alert(error.reason);
      }
      var chatId = ChatRooms.update({"_id":Session.get("roomid")},{$push:{messages:result.message}});
      console.log(chatId);
    });
    
    e.target.message.value = "";
  }
});