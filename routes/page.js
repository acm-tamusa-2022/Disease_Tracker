const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const Client = require('./models/client');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('survey');
});

/*router.get('/survey', (req, res) => {
    res.render('survey');
});

router.get('/thankyou', (req, res) => {
    res.render('thankyou');
});

router.post('/submitSurvey', (req, res) => {
    const client = new Client ({
        clientID: req.body.clientID,
        lname: req.body.lastname,
        fname: req.body.firstname,
        email: req.body.email,
        sex: req.body.sex,
        age: req.body.age,
        race: req.body.race,
        ethnicity: req.body.ethnicity,
        diseaseID: req.body.diseaseID,
        diseaseType: req.body.diseaseType,
        symtoms: req.body.symtoms,
        smoker: req.body.smoker
    });

    Client.collection.insertOne(client)
        .then(result => {
            res.render('submitSurvey');
        })
        .catch(err => console.log(err));
});

router.post('/submitSymptoms', (req, res) => {
    const response = new Client ({
        symptomsID: req.body.symptomsID,
        general: req.body.general,
        hent: req.body.hent,
        eyes: req.body.eyes,
        respiratory: req.body.respiratory,
        cardiovascular: req.body.cardiovascular,
        gastrointestinal: req.body.gastrointestinal,
        gu: req.body.gu,
        guMale: req.body.guMale,
        guFemale: req.body.guFemale,
        ms: req.body.ms,
        neurological: req.body.neurological,
        hematologic: req.body.hematologic,
        psychiatric: req.body.psychiatric,
    });

    Client.collection.insertOne(response)
        .then(result => {
            res.render('submitSurvey');
        })
        .catch(err => console.log(err));
});*/

module.exports = router;