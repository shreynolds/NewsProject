const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

console.log(`Your API key is ${process.env.key}`);

apiKey = process.env.key

const fetch = require("node-fetch");

const app = express()
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.post('/article', getInfo)

getInfo = async function(req, res){
    const url = req.body.url
    console.log(url)
    const info = await fetch('https://api.meaningcloud.com/sentiment-2.1?key=' + apiKey + '&of=json&url=' + url + '&lang=en')
    console.log(info)
    infojson = await info.json()
    console.log(infojson)
    res.send(infojson)
}

module.exports = getInfo
