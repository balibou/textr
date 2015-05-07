accountsUIBootstrap3.setLanguage('fr');

Accounts.ui.config({
   passwordSignupFields: 'USERNAME_AND_EMAIL'
});

Session.set("Mongol", {
  'collections': ['ChatRooms', 'Messages'],
  'display': true,
  'opacity_normal': ".7",
  'opacity_expand': ".9",
});