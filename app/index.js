const express = require('express');
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json({limit: '200mb'}));
app.use(bodyParser.urlencoded({limit: '200mb', extended: true}));

var server = app.listen(3000, () => {
    console.log('Tweeter is listening on port: ' + 3000 + '!');
});