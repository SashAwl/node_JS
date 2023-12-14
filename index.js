const express = require("express");
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Привет</h1><a href="/about">перейти на страницу о нас</a>');
})
app.get('/about', (req, res) => {
    res.send('<h1>Привет</h1><a href="/">перейти на страницу главная</a>');
})

app.listen(3000, () => {
    console.log('слушает')
})