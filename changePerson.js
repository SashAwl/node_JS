const fs = require("fs");
const path = require("path");
const pathToFile = path.join(__dirname, "person.json");

const data = JSON.parse(fs.readFileSync(pathToFile, "UTF-8"));
data.age -= 1;
data.city = "Eburg";

fs.writeFileSync(pathToFile, JSON.stringify(data));


