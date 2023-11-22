const http = require('http');  // импорт модуля http

const server = http.createServer((req, res) => {
    console.log("Запрос получен");  // функция вызывается при каждом обращении к серверу

    if (req.url === '/home' || req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
        res.end('<h1> Добро пожаловать на наш сайт!</h1>');
    }
    else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
        res.end('<h1> Узнайте немного о нас</h1>');
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=UTF-8' });
        res.end('<h1> Такой страницы не существует</h1>');
    }
})

const port = 3000;

server.listen(port, () => {     // указываем порт для запуска сервера; аргумент - ф-я, вып-ся при успеном запуске
    console.log(`Сервер запущен на порту ${port}`);
})
