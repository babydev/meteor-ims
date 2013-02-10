Meteor.methods({
	test: function () {
		console.log(Meteor.user());
		return "done test";
	},
	
	reset: function () {
		initCollection(MenuItems, devData.menuItems);
		initCollection(FormItems, devData.formItems);
		Meteor.users.remove({});
		createUser('admin@example.com', '123456', { 
			roles: [ 'admin' ],
			profile: {
				admin: {
					menuItems: devData.menuItems,				
					formItems: devData.formItems				
				}
			}
		});
		createUser('super@example.com', '123456', { 
			roles: [ 'super' ]
		});
		createUser('user@example.com', '123456', {
			roles: [ 'user' ], 
			profile: devData.profiles[0] 
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

function initCollection(collection, values) {
	collection.remove({});
	_.each(values, function(value) {
		collection.insert(value);
	});
}