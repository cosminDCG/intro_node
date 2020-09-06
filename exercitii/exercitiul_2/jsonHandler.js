const fs = require("fs");

//functie care citeste jsonul
module.exports.readJsonFile = function() {
    var result = JSON.parse(fs.readFileSync("data.json"));
    return result;
}

//functie care scrie inapoi jsonul
module.exports.writeJsonFile = function(json) {
    fs.writeFileSync("data.json", JSON.stringify(json, null, 4), "utf8");
}