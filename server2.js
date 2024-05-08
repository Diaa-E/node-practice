import http from "node:http";
import logRequest from "./utils/logger.js";
import { getAllUsers, getUser, jsonMiddleware, returnNotFound } from "./utils/handlers.js";

const PORT = process.env.PORT;
const HOSTNAME = process.env.HOSTNAME

const server = http.createServer((req, res) => {

    logRequest(req, res, () => {

        jsonMiddleware(req, res, () => {

            if (req.url === "/api/users" && req.method === "GET")
            {
                getAllUsers(req, res);
            }
            else if (req.url.match(/^\/api\/users\/[0-9]+$/) && req.method === "GET")
            {
                getUser(req, res);
            }
            else
            {
                returnNotFound(req, res);
            }
        });
    });
});

server.listen(PORT, HOSTNAME, () => {

    console.log(`Server 2 is running at http://${HOSTNAME}:${PORT}/`);
});