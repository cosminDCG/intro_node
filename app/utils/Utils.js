const fs = require("fs");

module.exports.readJSONFileByTableName = (table) => {
  var result = JSON.parse(fs.readFileSync("./db.json"))[table];
  return result ? result : [];
}

module.exports.readJSONFile = () => {
  var result = JSON.parse(fs.readFileSync("./db.json"));
  return result ? result : [];
}

module.exports.writeJSONFile = (table, content) => {
  var json = this.readJSONFile();
  json[table] = content;
  fs.writeFileSync(
    "./db.json",
    JSON.stringify(json, null, 4),
    "utf8",
    err => {
      if (err) {
        console.log(err);
      }
    }
  );
}