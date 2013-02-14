Template.forms.events({
  'click .update': function(e) {
    var data = {};

    $(e.target).parents('.forms').find('.form').each(function(i, o) {
      o = $(o);
      data[o.attr('field')] = o.val();
    });

    query('$set', data);
  },
  'click .method': function(e) {
  	Meteor.call($(e.target).attr('method'), function() {
    	debug(arguments);
  	});
  }
});