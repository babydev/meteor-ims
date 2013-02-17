Template.menu.events({
	'click a': function () {
		Session.set('activeMenuItem', this.key);
	}
});
