const mongoose = require('mongoose');


const ItemSchema = new mongoose.Schema({
    Brand_name: {
        type: String,
    },
    IPR: {
        type: String,
    },
    Designation: {
        type: String,
    },
    Status: {
        type: String,
    },
    Number: {
        type: String,
    },
    Office: {
        type: String,
    },
    Nice: {
        type: String,
    },
    Nice_classification: {
        type: String,
    },
    Owner: {
        type: String,
    },
});

module.exports = mongoose.model('Item',ItemSchema );
