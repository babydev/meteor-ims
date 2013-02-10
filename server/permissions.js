Meteor.startup(function(){
	Meteor.users.allow({
		insert: function(userId, doc){
			return false;
		},
		update: function(userId, docs, fields, modifier){
			//if(isAdminById(userId) || (docs[0]._id && docs[0]._id==userId)){
				return true;
			//}
			//return false;
		},
		remove: function(userId, docs){ 
			if(isAdminById(userId) || (docs[0]._id && docs[0]._id==userId)){
				return true;
			}
			return false; 
		}
	});
});