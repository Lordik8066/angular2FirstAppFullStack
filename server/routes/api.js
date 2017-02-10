const express = require('express');
const router = express.Router();

// GET api listing.
router.get('/', (req, res) => {
    res.send('api works');
});

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mean-app');


var ArticlesSchema = new mongoose.Schema({
    title: String,
    body: String,
    card_link: String,
    another_link: String
});

const Article = mongoose.model('articles', ArticlesSchema);
// Catch all other route and return the index file
router.get('/test', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    Article.find((err, articles) => {
        if (err) return console.log(err);
        res.send(articles);
    });
});

module.exports = router;