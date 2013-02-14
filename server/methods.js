Meteor.methods({
	updateMenus: function () {
		if (!isRole(Meteor.user(), 'admin')) {
			return;
		}

		initCollection(MenuItems, Meteor.user().profile.admin.menuItems);

		return "ok";
	}, 
	updateForms: function () {
		if (!isRole(Meteor.user(), 'admin')) {
			return;
		}

		initCollection(FormItems, Meteor.user().profile.admin.formItems);

		return "ok";
	}
});

