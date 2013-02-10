Meteor.autosubscribe(function () {
	Meteor.subscribe('formItems', Session.get('activeMenuItem'));
});