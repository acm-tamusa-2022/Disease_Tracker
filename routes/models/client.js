const mongoose = require('mongoose');

var surveySchema = new mongoose.Schema({
    clientID: {
        type: Number
    },
    lastname: {
        type: String
    },
    firstname: {
        type: String
    },
    email: {
        type: String
    },
    sex: {
        type: String
    },
    age: {
        type: Number
    },
    race: {
        type: String
    },
    ethnicity: {
        type: String
    },
    symptomsID: {
        type: Number
    }
});

module.exports = mongoose.model('SurveyResponse', surveySchema);