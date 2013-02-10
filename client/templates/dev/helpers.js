Template.dev.debug = function(type) {
  return Session.get('debug') ? 'checked' : '';
}

Template.dev.noConsole = function(type) {
  return !console || !console.log;
}