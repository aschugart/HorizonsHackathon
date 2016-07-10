  var mongoose = require('mongoose');

  var messageSchema = mongoose.Schema({
    body: {
      type: String,
      required: true
    },
    to: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    },
    from: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    }
  })


module.exports = mongoose.model('Message', messageSchema);