const mongoose = require('mongoose')
const validator = require('validator')

const Task = mongoose.model('task',{
    name: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean
    }
})
module.exports = Task