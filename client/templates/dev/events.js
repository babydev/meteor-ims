Template.dev.events({
  'click a[href=#user]': function() {
    login('user@example.com');
  },
  'click a[href=#super]': function() {
    login('super@example.com');
  },
  'click a[href=#admin]': function() {
    login('admin@example.com');
  },
  'click a[href=#reset]': function() {
    var user = Meteor.user(); email = user ? user.emails[0].address : null;
    callMethod('reset');
    Meteor.loginWithPassword(email, '123456');
  },
  'click a[href=#test]': function() {
      callMethod('test');
  },
  'click input[type=checkbox]' : function(evt) {
    Session.set('debug', evt.originalTarget.checked ? true : null);
  }
})

function login(email) {
    Meteor.loginWithPassword(email, '123456');
    Session.set('activeMenuItem', null);
}

function callMethod(method) {
  Meteor.call(method, function() {
    debug(arguments);
  });
}