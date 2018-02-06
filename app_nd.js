const express = require('express');
const logger = require('morgan');
const request = require('request-promise');
const exphbs = require('express-handlebars');
const { publicKey, privateKey } = require('./api_key');
const md5 = require('md5');


const app = express();

app.use(logger('dev'));
app.engine('handlebars', exphbs({defaultLayout: 'index'}));
app.set('view engine', 'handlebars');
app.use(express.static('public'));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist'));

const timeStamp = Math.floor(Date.now() / 1000);
console.log(timeStamp);
var getMarvelCharacter = {
    url: 'http://gateway.marvel.com/v1/public/characters',
    method: 'GET',
    qs: {
        // name: 'spider-man',
        // limit: 60,
        ts: timeStamp,
        apikey: publicKey,
        hash: md5(timeStamp + privateKey + publicKey),
    },
    json: true
}

function normalizeData(hero) {
    const {
        // results: [{
            id: heroId,
            name: heroName,
            description: heroDescription,
            thumbnail: {
                path: thumbnailJpg
            }
        // }]
    } = hero;
    return {
        heroId,
        heroName,
        heroDescription,
        thumbnailJpg
    };
};


app.get('/', function (req, res) {
    request(getMarvelCharacter).then(function (Data){
        const result = Data.data.results;
        // res.send(result);
        return result
    })
    .then(function (heroDetail) {
        const nomalizedHeroDetail = heroDetail.map(function (detail) {
           return normalizeData(detail);
        })
        res.send(nomalizedHeroDetail);
    })    
})





app.listen(3000, function() {
    console.log('Listening on port 3000');
})