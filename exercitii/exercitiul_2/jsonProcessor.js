const jsonHandler = require('./jsonHandler');

//functie care face procesarea
function process() {
    var json = jsonHandler.readJsonFile();

    json["nume"] = "Cosmin";
    json.dataNastere = "18.08.1997";
    json["facultate"]["nume"] = "FMI";
    json.facultate.oras = "Bucuresti";
    json.cursuri.push("Node");

    jsonHandler.writeJsonFile(json);
}

process();