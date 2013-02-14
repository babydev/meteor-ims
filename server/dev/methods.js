Meteor.methods({
	test: function () {
		console.log(Meteor.user());
		return "done test";
	},
	
	reset: function () {
		initCollection(MenuItems, menuItems);
		initCollection(FormItems, formItems);
		Meteor.users.remove({});
		createUser('admin@example.com', '123456', { 
			roles: [ 'admin' ],
			profile: {
				admin: {
					menuItems: menuItems,				
					formItems: formItems				
				}
			}
		});
		createUser('super@example.com', '123456', { 
			roles: [ 'super' ]
		});
		createUser('user@example.com', '123456', {
			roles: [ 'user' ], 
			profile: profile 
		});
		return "done resetting";
	}
});

function createUser(email, password, options) {
	Meteor.users.update({
		_id: Accounts.createUser({
			email: email,
			password: password
		})
	}, {
		$set: options
	});
}