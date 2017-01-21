// Gets mongoose module.
var mongoose = require('mongoose'),
    // Sets Schema variable to Schema method from mongoose.
    Schema   = mongoose.Schema;

// Define a new Schema. (Data model)
var todoSchema = new Schema({
  username: String,
  todo: String,
  isDone: Boolean,
  hasAttachment: Boolean
});

// Sets the new Schema as a mongoose model with the name "Todos".
var Todos = mongoose.model('Todos', todoSchema);

// Exports the Schema model.
module.exports = Todos;