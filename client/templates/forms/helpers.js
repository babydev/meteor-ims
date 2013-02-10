Template.forms.formItems = function() {
	return FormItems.find();
}

Template.forms.isType = function(type) {
  return this.type == type;
}

Template.forms.fieldValue = function(context, field) {
	if (!field) {
		return debug('error getting fileValue, field not present. context:', context);
	}

	_.each(field.split('.'), function(part) { 
		if (context[part]) {
			context = context[part];
		} else {
			return debug('error getting fileValue, field: ' + 
				field + ', context:', context);
		}
	});

	return context;
}

Template.forms.editing = function (context) {
  return Session.equals('editing_listname', JSON.stringify(context));
};