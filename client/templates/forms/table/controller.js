Template.table.events({
  'click .delete': function(e) {
    query('$pull', this.tableData.meta.field, this.row);
  },
  'click .create': function(e) {
    query('$addToSet', this.tableData.meta.field, bind(e.target));
  },
  'click .edit': function(e) {
    if (editing.get(this.row)) {
      query('$pull', this.tableData.meta.field, this.row);
      query('$addToSet', this.tableData.meta.field, bind(e.target));
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

function bind(el) {
  var data = {};

  $(el).parents('tr').find('input').each(function(i, o) { 
    o = $(o);
    data[o.attr('field')] = o.val();
  })

  return data;
}