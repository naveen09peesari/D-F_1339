const http = require('http');

const server = http.createServer((req, res) => {
    const a = 10;
    const b = 20;
    const sum = a + b;

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("Sum = " + sum);
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
