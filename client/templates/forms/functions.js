function update() {
  var data = {};

  FormItems.find().forEach(function(formItem) {
	  if (formItem.type != 'button') {
      var value = $('[field="' + formItem.field + '"]').val();
      data[formItem.field] = value;
		}
  });

	Meteor.users.update({_id: Meteor.user()._id }, { $set: data }, error);
}

function insert(context) {
  var data = {};

  _.each(context.fields, function(fieldItem) {
    data[fieldItem.field] = $("#insert_" + fieldItem.field).val();
  });

  var setData = {};

  setData[context.field] = data;
  Meteor.users.update({_id: Meteor.user()._id }, { $addToSet: setData}, error);
}

function error(error) {
    if (error) {
      alert('Error during update: ' + error);
    }
}