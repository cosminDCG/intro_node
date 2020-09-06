var express = require('express');
var router = express.Router();

//definim o ruta pe /api/dummy care apeleaza functia de la al doilea parametru
router.get('/api/dummy', function(req, res) {
    var dummyDetails = {
        "nume": "Cosmin",
        "dataNastere": "18.08.1997",
        "facultate": {
            "nume": "FMI",
            "oras": "Bucuresti"
        },
        "cursuri": [
            "Angular",
            "Java",
            "Node"
        ]
    }

    res.status(200).send(dummyDetails);
})

//expunem rutele spre a fi folosite
module.exports = router;