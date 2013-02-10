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
      callMethod('reset');
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