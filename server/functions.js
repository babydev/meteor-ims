var isRoleById = function(userId, role){
	var user = Meteor.users.findOne(userId);
	return user && isRole(user, role);
}

var isRole = function(user, role){
	if(!user || typeof user === 'undefined' || !user.roles)
		return false;

	for (var i=0; i<user.roles.length; i++) {
		if (role === user.roles[i])
			return true;
	}

	return false;
}

function initCollection(collection, values) {
	collection.remove({});
	_.each(values, function(value) {
		collection.insert(value);
	});
}