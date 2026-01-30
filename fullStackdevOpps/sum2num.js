const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const query = url.parse(req.url, true).query;

    const a = Number(query.a);
    const b = Number(query.b);

    if (isNaN(a) || isNaN(b)) {
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        res.end("Use: http://localhost:3000/?a=10&b=20");
    } else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end("Sum = " + (a + b));
    }
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
