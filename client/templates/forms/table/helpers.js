Template.table.value = function(context) {
	return getValue(context, this.field);
}

Template.table.editing = function (context) {
	return editing.get(context);
};

Template.table.isType = function(type) {
	return this.type == type;
}

Template.table.context = function(context) {
	return { data: getValue(context, this.field), meta: this, isNested: true }
}

Template.table.eventContext = function(context) {
	return { tableData: context, row: this }
}
