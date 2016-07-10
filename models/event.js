var mongoose = require('mongoose');


var eventSchema = mongoose.Schema({
	title: String,
	start: String,
	details: String
});



//this is if there were multiple models in one file
// module.exports = {
// 	User: mongoose.model('User', userSchema)
// }

module.exports = mongoose.model('Event', eventSchema);