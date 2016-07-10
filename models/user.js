var mongoose = require('mongoose');
var findOrCreate = require('mongoose-findorcreate')


var userSchema = mongoose.Schema({
	username: String, //THIS IS A PHONE NUMBER!
	password: String,
	facebookId: String
});

userSchema.plugin(findOrCreate);


//this is if there were multiple models in one file
// module.exports = {
// 	User: mongoose.model('User', userSchema)
// }

module.exports = mongoose.model('User', userSchema);