const fs = require("fs");

function processFile() {
    //citim din fisier
    var text = fs.readFileSync("C:/Users/cosmi/OneDrive/Desktop/intro_node/exercitii/exercitiul_1/input.txt", "utf8");
    console.log(text);

    //editam textul
    var date = new Date();
    text = text + " " + date.toLocaleDateString();
    console.log(text);

    //scriem in fisier
    fs.writeFileSync("output.txt", text, "utf8", (err) => { console.log(err)});
}

processFile()