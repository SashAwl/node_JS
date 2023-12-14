const express = require("express");
const app = express();

const fs = require("fs");
const path = require("path");

const pathToFile = path.join(__dirname, "visitData.json");

function updateCounter(route) {
    const visitData = JSON.parse(fs.readFileSync(pathToFile));
    visitData[route] += 1;
    fs.writeFileSync(pathToFile, JSON.stringify(visitData));
    return visitData[route];
}

app.get("/", (req, res) => {
    res.send(`<h1>Приветствуем вас на нашем сайте</h1>
            <p> Страницу посетили ${updateCounter('countHome')} раз(а)
            <a href="/about">Узнать о нас больше</a>`);
})

app.get("/about", (req, res) => {
    res.send(`<h1>Немного о нас</h1>
            <p> Страницу посетили ${updateCounter('countAbout')} раз(а) 
            <a href="/">Перейти на главную страницу</a>`);
})

app.listen(3000, () => {
    console.log("Прослушивается 3000 порт")
});