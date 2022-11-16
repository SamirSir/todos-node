// Basic Node server
const http = require("http");

// create server
const server = http.createServer((request, response) => {
    const url = request.url;

    switch (url) {
        case "/":
            response.writeHead(200);
            response.end("Home");
            break;

        case "/products":
            response.writeHead(200);
            response.end("Products}");
            break;

        case "/overview":
            response.writeHead(200);
            response.end("Overview");
            break;

        default:
            response.writeHead(404);
            response.end("Bad request!");
            break;
    }
});

// listen to request on server
server.listen(8000, "127.0.0.1", () => {
    console.log("Listening to request on port 8000!");
});
