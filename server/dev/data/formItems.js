formItems = [
// Profile
{
	menuKey: 'profile',
	caption: 'First Name',
	field: 'profile.firstName',
	type: 'text'
}, {
	menuKey: 'profile',
	caption: 'Last Name',
	field: 'profile.lastName',
	type: 'text'
}, {
	menuKey: 'profile',
	caption: 'Age',
	field: 'profile.age',
	type: 'text'
}, {
	menuKey: 'profile',
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
	}]
}, {
	menuKey: 'profile',
	caption: 'Update',
	field: 'update',
	type: 'button'
}, 
// MenuItems
{
	menuKey: 'menus',
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
	}]
}, 
// FormItems
{
	menuKey: 'forms',
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
	}, {
		caption: 'Fields',
		field: 'fields',
		type: 'table',
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
		}]
	}]
}, 
// Registered Users
{
	menuKey: 'super',
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
	}]
}];