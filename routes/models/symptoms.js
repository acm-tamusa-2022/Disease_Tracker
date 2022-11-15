const mongoose = require('mongoose');

var symptomsSchema = new mongoose.Schema({
    symptomsID: {
        type: Number
    },
    general: {
        type: Boolean
    },
    hent: {
        type: Boolean
    },
    eyes: {
        type: Boolean
    },
    respiratory: {
        type: Boolean
    },
    cardiovascular: {
        type: Boolean
    },
    gastrointestinal: {
        type: Boolean
    },
    gu: {
        type: Boolean
    },
    guMale: {
        type: Boolean
    },
    guFemale: {
        type: Boolean
    },
    ms: {
        type: Boolean
    },
    neurological: {
        type: Boolean
    },
    hematologic: {
        type: Boolean
    },
    psychiatric: {
        type: Boolean
    }
});

module.exports = mongoose.model('SymptomsResponse', symptomsSchema);