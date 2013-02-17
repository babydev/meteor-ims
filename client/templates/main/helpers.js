Template.main.helpers({
	'context': function () {
		return { data: Meteor.user(), meta: getCollection('formItems', 'activeMenuItem') }
	}
});