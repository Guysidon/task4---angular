const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    created: {
        type: String,
        required: true
    },
    person_id: {
        type: String,
        required: true
    }
});

const Task = mongoose.model('task', taskSchema);
module.exports = {
    Task,
}