const mongoose = require('mongoose')

const Detail = mongoose.model('Detail', {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    learnerId: { type: String, required: true },
    linkedin: { type: String, required: true },
    attendance: { type: Number, required: true },
    codeLines: { type: Number, required: true },
    createdDate: { type: Date, default: Date.now },

})

module.exports = Detail

