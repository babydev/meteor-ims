Template.dev.debug = function() {
  return Session.get('debug') ? 'checked' : '';
}

Template.dev.noConsole = function() {
  return !console || !console.log;
}