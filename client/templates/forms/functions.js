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

function getValue(context, menuItem) {
	if (menuItem.field) {
		_.each(menuItem.field.split('.'), function(part) { 
			if (!context || typeof(context[part]) == 'undefined') {
				context = '';
			} else {
				context = context[part];
			}
		});
	} else if (menuItem.model) {
		/*if (!Collections[menuItem.model]) {
			Collections[menuItem.model]	= new Meteor.Collection(menuItem.model);

			Meteor.autosubscribe(function () {
				Meteor.subscribe(menuItem.model);
			});			
		}
		var x = Collections[menuItem.model].findOne();
		debugger;
		return [ 
		 
		 ];*/

		// return MenuItems.find();
	}

	return context;
}