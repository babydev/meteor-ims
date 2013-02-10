var devData = {
	// MenuItems
	menuItems: [{
		title: 'My Profile',
		key: 'profile',
		role: 'user',
	}, {
		title: 'Welcome',
		key: 'welcome',
		role: 'guest'
	}, {
		title: 'Menus',
		key: 'menus',
		role: 'admin'
	}, {
		title: 'Forms',
		key: 'forms',
		role: 'admin'
	}, {
		title: 'Users',
		key: 'users',
		role: 'super'
	}],

	// FormItems
	formItems: [{
		caption: 'First Name',
		field: 'profile.firstName',
		type: 'text',
		menuKey: 'profile'
	}, {
		caption: 'Last Name',
		field: 'profile.lastName',
		type: 'text',
		menuKey: 'profile'
	}, {
		caption: 'Age',
		field: 'profile.age',
		type: 'text',
		menuKey: 'profile'
	}, {
		caption: 'Phones list',
		type: 'table',
		field: 'profile.phoneNumbers',
		fields: [{
			caption: 'Phone Number',
			field: 'phoneNumber',
			type: 'text'
		}, {
			caption: 'extension #',
			field: 'extension',
			type: 'text'
		}],
		menuKey: 'profile'
	}, {
		caption: 'Update',
		field: 'update',
		type: 'button',
		menuKey: 'profile'
	}, 
	// MenuItems
	{
		caption: 'Menu Items',
		type: 'table',
		field: 'profile.admin.menuItems',
		fields: [{
			caption: 'Title',
			field: 'title',
			type: 'text'
		}, {
			caption: 'Key',
			field: 'key',
			type: 'text'
		}, {
			caption: 'Role',
			field: 'role',
			type: 'text'
		}],
		menuKey: 'menus'
	}, 
	// Admin FormItems
	{
		caption: 'Form Items',
		type: 'table',
		field: 'profile.admin.formItems',
		fields: [{
			caption: 'Caption',
			field: 'caption',
			type: 'text'
		}, {
			caption: 'Field',
			field: 'field',
			type: 'text'
		}, {
			caption: 'Type',
			field: 'type',
			type: 'text'
		}, {
			caption: 'Menu',
			field: 'menuKey',
			type: 'text'
		}],
		menuKey: 'forms'
	}, 
	// Registered Users
	{
		caption: 'Registered Users',
		type: 'table',
		field: 'profile.super.users',
		fields: [{
			caption: 'First Name',
			field: 'profile.firstName',
			type: 'text'
		}, {
			caption: 'Last Name',
			field: 'profile.firstName',
			type: 'text'
		}, {
			caption: 'Age',
			field: 'profile.age',
			type: 'text'
		}],
		menuKey: 'super'
	}],

	//Profiles
	profiles: [{
		age: '9',
		firstName: 'Andrew',
		lastName: 'Smith',
		phoneNumbers: [{
			'phoneNumber': '05050505',
			'extension' : '4' 
		}, { 
			'phoneNumber': '03030303', 
			'extension' : '6'
		}, { 
			'phoneNumber': '01010101', 
			'extension' : '8'
		}]
	}]
}