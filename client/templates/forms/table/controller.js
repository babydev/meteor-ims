Template.table.events({
  'click .delete': function(e) {
    query('$pull', this.tableData.meta.field, this.row);
  },
  'click .create': function(e) {
    query('$addToSet', this.tableData.meta.field, bind(this.tableData.meta.fields, e.target));
  },
  'click .edit': function(e) {
    if (editing.get(this.row)) {
      query('$pull', this.tableData.meta.field, this.row);
      query('$addToSet', this.tableData.meta.field, bind(this.tableData.meta.fields, e.target));
      editing.set(null);
    } else {
      editing.set(this.row);
    }
  }
});

var editing = {
  get: function(context) {
    return context && Session.equals('editing', JSON.stringify(context));
  },

  set: function(context) {
    Session.set('editing', JSON.stringify(context));
  }
}

function bind(meta, el) {
  var data = {};

  el = $(el).parents('tr');

  _.each(meta, function(field) {
    if (field.field) {
      var val = el.find('input[field="' + field.field + '"]').val();
      switch (field.type) {
        case 'json':
          val = JSON.parse(val);
          break;
      }

      data[field.field] = val;
    }
  });

  return data;
}