const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const pagesRouter = require('./routes/page');
const mongoose = require('mongoose');
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', pagesRouter);

/*mongoose.connect('mongodb+srv://<diseaseControl>:<EqF1ee97QBTkSDix>@cluster0.am074.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        app.listen(3000, () => {
            console.log('MongoDB is connected and Express server is running...')
        });
    });*/

app.listen(3000, () => {
    console.log('MongoDB is connected and Express server is running...')
});