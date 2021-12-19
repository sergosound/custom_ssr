const http = require('http');

const PORT = 8080;
const hostname = '127.0.0.1';

const server = http.createServer((req, res) => {
    console.log('Request', req.url);
    res.end()
});

server.listen(PORT, hostname, () => {
    console.log('Server running on port:', PORT);
});
