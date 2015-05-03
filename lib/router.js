Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() { 
    return [Meteor.subscribe("chatrooms"), Meteor.subscribe("onlusers")]
  }
});

Router.route('/chatrooms', {
  name: 'chatrooms',
  data: function() {

    var currentId = Session.get('currentId');
    var res=ChatRooms.findOne({chatIds:{$all:[currentId,Meteor.userId()]}});
    console.log(res);
    if(res){
      Session.set("roomid",res._id);
    }
    else{
      var newRoom= ChatRooms.insert({chatIds:[currentId, Meteor.userId()],messages:[]});
      Session.set('roomid',newRoom);
    }

  }
});

var requireLogin = function() {
  if (! Meteor.user()) {
    if (Meteor.loggingIn()) {
      this.render(this.loadingTemplate);
    } else {
      this.render('accueil');
    }
  } else {
    this.next();
  }
}

Router.route('/', {name: 'chat'});
Router.onBeforeAction(requireLogin, {only: 'chat'});