import { createServer } from "node:http";

const PORT = process.env.PORT;
const HOSTNAME = "127.0.0.1";

const server = createServer((req, res) => {

    try
    {
        if (req.method !== "GET")
        {
            throw new Error(`Method ${req.method} is not allowed`);
        }
    }
    catch (error)
    {
        console.log(error);
        res.writeHead(500, { "Content-Type": "text/html" });
        res.end("<h1>Error 500</h1>");
        return;
    }

    switch (req.url)
    {
        case "/": 
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end("<h1>Home</h1>");
            break;

        case "/about": 
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end("<h1>About</h1>");
            break;

        case "/contact": 
        res.writeHead(200, { "Content-Type": "text/html" });
            res.end("<h1>Contact</h1>");
            break;

        default: 
            res.writeHead(404, { "Content-Type": "text/html" });
            res.end("<h1>Error 404</h1>");
    }
});

server.listen(PORT, HOSTNAME, () => console.log(`server running at http://${HOSTNAME}:${PORT}/`));