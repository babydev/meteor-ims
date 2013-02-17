Template.forms.isType = function(type) {
	return this.type == type;
}

Template.forms.context = function(context) {
	return { data: getValue(context.data, this), meta: this }
}

Template.forms.value = function(context) {
	return getValue(context.data, this);
}