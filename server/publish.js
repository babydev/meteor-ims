Meteor.publish('formItems', function (menuKey) {
	return FormItems.find({ menuKey: menuKey });
});

Meteor.publish('menuItems', function () {
	var user =  Meteor.users.findOne({ _id: this.userId });
	var roles = user && user.roles ? user.roles : [ 'guest' ];

	return MenuItems.find({ role: roles[0] });
});