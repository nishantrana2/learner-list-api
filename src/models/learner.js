const mongoose = require('mongoose')
const validator = require('validator')

const Learner = mongoose.model('Learner', {
    name: { type: String, unique: true, required: true }, 
    imageURL: {type: String, required: true},
    batch: { type: String, required: true },
    createdDate: { type: Date, default: Date.now },

})

module.exports = Learner