Meteor.publish('formItems', function (menuKey) {
	return FormItems.find({ menuKey: menuKey }, { sort : { order: 1 }});
});

Meteor.publish('menuItems', function () {
	var user =  Meteor.users.findOne({ _id: this.userId });
	var roles = user && user.roles ? user.roles : [ 'guest' ];

	return MenuItems.find({ role: roles[0] }, { sort: { order: -1 }});
});