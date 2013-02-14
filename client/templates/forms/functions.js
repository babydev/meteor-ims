function query() {
  Meteor.users.update({_id: Meteor.user()._id }, wrap(arguments), function(error) {
    if (error) {
      alert('Error during update: ' + error);
    }
  });
}

function wrap(params) {
	var data = {}, itr = data;

	for (var i=0; i<params.length -1; i++) {
		var val = params[i];

		if (i<params.length-2) {
			itr[val] = {};
			itr = itr[val];
		} else {
			itr[val] = params[params.length-1];
		}

	}

	return data;
}

function getValue(context, field) {
	if (field) {
		_.each(field.split('.'), function(part) { 
			if (!context || typeof(context[part]) == 'undefined') {
				context = '';
			} else {
				context = context[part];
			}
		});
	}

	return context;
}