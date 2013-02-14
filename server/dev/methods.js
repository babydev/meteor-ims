Meteor.methods({
	test: function () {
		console.log(Meteor.user());
		end("done test");
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
		end("done resetting");
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

function end(message) {
	console.log(message);
	return message;
}