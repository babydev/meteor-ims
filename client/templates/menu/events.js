Template.menu.events({
	'click a': function () {
		Session.set('activeMenuItem', this.key);
		debug('menu key is ' + this.key)
	}
});
