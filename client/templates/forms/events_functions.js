EDITING = 'editing';

Template.forms.events({
  'click [action=update]': function(evt) {
    var data = {};

    FormItems.find().forEach(function(formItem) {
      if (formItem.type != 'button') {
        var value = $('[field="' + formItem.field + '"]').val();
        data[formItem.field] = value;
      }
    });

    query({ $set: data });
  },
  'click [action=edit]': function(evt) {
    stop = !editing(this);

    editing(this, true);

    if (stop) {
      evt.stopPropagation();
    }
  },
  'click table': function(evt) {
    var el = $(evt.target);

    if (el.is('div')) {
      var bindDOM = function(el, field, selector, attr) {
        var data = {};
        var _data = data[field] = {};

        el.parent().parent().find(selector).each(function(i, o) { 
          _data[$(o).attr('field')] = attr ? $(o).attr(attr) : o.value;
        })

        return data;
      }

      switch (el.attr('action')) {
        case 'insert':
          query({ $addToSet: bindDOM(el, this.field, 'input') });
          break;
        case 'edit':
          query({ $pull: bindDOM(el, this.field, 'input', 'originalValue') });
          query({ $addToSet: bindDOM(el, this.field, 'input') });
          Session.set(EDITING, null);
          break;
        case 'delete':
          query({ $pull: bindDOM(el, this.field, 'span', 'value') });
          break;
      }
    }
  }
});

function editing(context, set) {
  if (set) {
    Session.set(EDITING, JSON.stringify(context));
  } else {
   return context && Session.equals(EDITING, JSON.stringify(context));
  }
}

function query(query) {
  Meteor.users.update({_id: Meteor.user()._id }, query, function(error) {
    if (error) {
      alert('Error during update: ' + error);
    }
  })
}