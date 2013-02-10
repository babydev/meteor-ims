Template.forms.events({
  'click [action=update]': function () {
    update();
	},
  'click [action=insert]': function () {
    insert(this);
  },
  'click .destroy': function () {
    //TODO
    debug('todo destroy');
  },
  'click .edit': function () {
    Session.set('editing_listname', JSON.stringify(this)); //TODO: finish
    debug('todo edit');
  }
});