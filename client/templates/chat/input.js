Template.input.helpers({
  'msgs':function(){
    if(Session.get('roomid')){
      return true;
    }
  }
});

Template.input.events = {
  'keydown input#message' : function (event) {
    if (event.which == 13) { 
      if (Meteor.user()){
        var name = Meteor.user().username;
        var message = document.getElementById('message');
        if (message.value !== '') {
          var de=ChatRooms.update({"_id":Session.get("roomid")},{$push:{messages:{
           name: name,
           text: message.value,
           createdAt: Date.now()/1000
          }}});
          document.getElementById('message').value = '';
          message.value = '';
        }
      } else {
        alert("Il faut se logger !");
      }
    }
  }
}