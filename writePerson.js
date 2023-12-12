const fs = require("fs");
const path = require("path");

const objPerson = {
    "name": "Ivan",
    "sername": "Ivanov",
    "age": 30,
    "city": "Moscow",
};

fs.writeFileSync(path.join(__dirname, "person.json"),
    JSON.stringify(objPerson, null, 2),
    (err) => {
        if (err) {
            console.log(err);
        }
        console.log("File was saved")
    })

