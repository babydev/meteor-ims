Template.main.helpers({
	'context': function () {
		return { data: Meteor.user(), meta: FormItems.find() }
	}
});