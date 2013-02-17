Template.menu.menuItems = function() {
	return getCollection('menuItems');
}

Template.menu.selected = function() {
	return Session.equals('activeMenuItem', this.key) ? 'active' : '';
}