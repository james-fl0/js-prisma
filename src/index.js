import http from 'http';
import { PrismaClient } from '@prisma/client'
import { UserService } from './services/index.js';


const hostname = '127.0.0.1';
const port = process.env.PORT ?? 80;

const server = http.createServer((req, res) => {
    if (!req.url) throw new Error('URL was undefined');
    const url = new URL(req.url, `http://${req.headers.host}`);

    switch (url.pathname) {
        case '/users':
            users(req, res);
            break;
        default:
            notFound(req, res)
            break;
    }


});


const users = async (req, res) => {
    const userService = new UserService(new PrismaClient());
    const users = await userService.findAll();

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
        status: 'OK',
        errors: [],
        users,
    }));
}

const notFound = (req, res) => {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
        status: 'ERROR',
        errors: ['Requested resource not found'],
    }));
}

server.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});