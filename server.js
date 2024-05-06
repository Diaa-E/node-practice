import { createServer } from "node:http";

const PORT = process.env.PORT;
const HOSTNAME = "127.0.0.1";

const server = createServer((req, res) => {

    // res.statusCode = 200;
    // res.setHeader("Content-Type", "text/html");
    res.writeHead(200, { "Content-Type": "text/html" })
    res.end("<h1>hello world</h1>");
});

server.listen(PORT, HOSTNAME, () => console.log(`server running at http://${HOSTNAME}:${PORT}/`));