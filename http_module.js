const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end("Welcome to our home page");
    } else if (req.url === '/about') {
        res.end("Welcome to our about page");
    } else {
        res.end(`
            <h1>Oops!!</h1>
            <p>We cannot find the page you are looking for</p>
            <a href="/">Back to Home</a>
        `);
    }
});

server.listen(5000, () => {
    console.log('Server is listening on port 5000...');
});
