var collections = {};

Meteor.methods({
    initCollection: function(collection) {
		if (!collections[collection]) {
      		collections[collection] = new Meteor.Collection(collection);

      		Meteor.publish(collection, function (param) {
      			var where = {};

      			switch (collection) {
      				case 'formItems':
      					where = { menuKey: param };
      					break;
      				case 'menuItems':
    						var user = Meteor.users.findOne({ _id: this.userId });
    						var roles = user && user.roles ? user.roles : [ 'guest' ];
    						where = { role: roles[0] };
      					break;
      			}

        		return collections[collection].find(where, { sort : { order: 1 }});
      		});
      	}
    }
});