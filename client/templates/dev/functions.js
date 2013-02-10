Session.set('debug', true);

function debug() {
	if (Session.get('debug')) {
		_.each(arguments, function(argument) {
			if (console && console.log) {
				console.log(argument);
			} else {
				if (typeof(argument) == 'string') {
					alert(argument);
				}
			}
		});
	}
}