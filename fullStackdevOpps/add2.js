const http = require('http');

const server = http.createServer((req, res) => {
    const a = 5;
    const b = 7;
    const sum = a + b;

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("Sum = " + sum);
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});
