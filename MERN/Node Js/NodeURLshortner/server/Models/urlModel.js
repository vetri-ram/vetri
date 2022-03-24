const mongoose = require('mongoose');

const urlSchema = mongoose.Schema({
    longurl: {
        type: String,
        required: true
    },
    shorturl: {
        type: String,
        unique:true
    },
    clickcount: {
        type: Number,
        default:0
    },
})

const urlModal = mongoose.model("urlshort", urlSchema);

module.exports = { urlModal };