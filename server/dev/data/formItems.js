formItems = [
// Profile
{
	menuKey: 'profile',
	caption: 'First Name',
	field: 'profile.firstName',
	type: 'text',
	order: 1
}, {
	menuKey: 'profile',
	caption: 'Last Name',
	field: 'profile.lastName',
	type: 'text',
	order: 2
}, {
	menuKey: 'profile',
	caption: 'Age',
	field: 'profile.age',
	type: 'text',
	order: 3,
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
	}],
	order: 4
}, {
	menuKey: 'profile',
	caption: 'Update',
	field: 'update',
	type: 'button',
	order: 5
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
	}, {
		caption: 'Order',
		field: 'order',
		type: 'text'
	}],
	order: 1
}, {
	menuKey: 'menus',
	caption: 'Update Menus',
	method: 'updateMenus',
	type: 'button',
	order: 2
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
		caption: 'Method',
		field: 'method',
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
		type: 'json', //'table'
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
	}, {
		caption: 'Role',
		field: 'role',
		type: 'text'
	}, {
		caption: 'Order',
		field: 'order',
		type: 'text'
	}],
	order: 1
}, {
	menuKey: 'forms',
	caption: 'Update Forms',
	method: 'updateForms',
	type: 'button',
	order: 2
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