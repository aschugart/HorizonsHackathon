var mongoose = require('mongoose');


var eventSchema = mongoose.Schema({
	title: String,
	start: Date,
	details: String,
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    }
});



//this is if there were multiple models in one file
// module.exports = {
// 	User: mongoose.model('User', userSchema)
// }

module.exports = mongoose.model('Event', eventSchema);