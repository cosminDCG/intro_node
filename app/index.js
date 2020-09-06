//importam express
const express = require('express');
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json({limit: '200mb'}));
app.use(bodyParser.urlencoded({limit: '200mb', extended: true}));
//spunem aplicatiei ca poate folosi rutele definite in controller
app.use(require('./controllers/DummyController'));

var server = app.listen(3000, () => {
    console.log('Tweeter is listening on port: ' + 3000 + '!');
});