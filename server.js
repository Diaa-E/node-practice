import { createServer } from "node:http";
import * as fs from "node:fs/promises";
import * as url from "node:url";
import * as path from "node:path";

//get current directory
//available by default in CJS but not in ESM
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT;
const HOSTNAME = "127.0.0.1";

const server = createServer(async (req, res) => {

    let filePath;
    let status;

    try {
        if (req.method !== "GET") {
            throw new Error(`Method ${req.method} is not allowed`);
        }
    }
    catch (error) {
        console.log(error);
        filePath = path.join(__dirname, "public", "error.html");
        status = 500;
    }

    switch (req.url) {
        case "/":
            filePath = path.join(__dirname, "public", "index.html");
            status = 200;
            break;

        case "/about":
            filePath = path.join(__dirname, "public", "about.html");
            status = 200;
            break;

        case "/contact":
            filePath = path.join(__dirname, "public", "contact.html");
            status = 200;
            break;

        default:
            filePath = path.join(__dirname, "public", "error.html");
            status = 404;
    }
    const data = await fs.readFile(filePath);
    res.writeHead(status, "Content-Type", "text/html");
    res.write(data);
    res.end();
});

server.listen(PORT, HOSTNAME, () => console.log(`server running at http://${HOSTNAME}:${PORT}/`));