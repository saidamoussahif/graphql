const mongoose = require('mongoose');


const  ProjetcSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    status: {
        type: String,
        enum: ['Not started','In Progress', 'Done']
    },
    clientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Client'
    }
});

module.exports = mongoose.model('Project',ProjetcSchema );
