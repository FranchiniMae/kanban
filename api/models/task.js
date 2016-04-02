var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var taskSchema = new Schema({
  description: { type: String },
  completed: { type: Boolean },
  goal: [{ type: Schema.Types.ObjectId, ref: 'Goal'}]
});

var Task = mongoose.model('Task', taskSchema);
module.exports = Task;