const mongoose = require('mongoose');

const personSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    nickname: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

const Person = mongoose.model('person', personSchema);
module.exports = {
    Person,
}