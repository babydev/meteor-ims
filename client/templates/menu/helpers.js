Template.menu.menuItems = function() {
	return MenuItems.find();
}

Template.menu.selected = function() {
	return Session.equals('activeMenuItem', this.key) ? 'active' : '';
}