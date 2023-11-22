const http = require('http');

let counterHome = 0;
let counterAbout = 0;
const server = http.createServer((req, res) => {

    if (req.url === '/home' || req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
        res.end(`<h1> Добро пожаловать на наш сайт!</h1>
                <a href="/about" style="display:block">Узнать о нас больше -></a>
                <a href="/statistic" style="display:block">Посмотреть статистику посещений -></a>
                `);
        counterHome++;
    }
    else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
        res.end('<h1> Узнайте немного о нас</h1><a href="/" style="display:block"><- Вернуться на главную</a>');
        counterAbout++;
    }
    else if (req.url === '/statistic') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
        res.end(`<h1> Мы сегодня популярны</h1>
                <p>Страница "Главная" - посетили ${counterHome} раз(a))</p>
                <p>Страница "О нас" - посетили ${counterAbout} раз(a)</p>
                <a href="/" style="display":"block"><- Вернуться на главную</a>
                `);
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=UTF-8' });
        res.end('<h1> Такой страницы не существует</h1>');
    }
})

const port = 3000;

server.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
})