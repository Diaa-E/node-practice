import http from "node:http";

const PORT = process.env.PORT;
const HOSTNAME = process.env.HOSTNAME

const users = [
    {
        id: 1,
        name: "John Doe"
    },
    {
        id: 2,
        name: "Jane Doe"
    },
    {
        id: 3,
        name: "Bruce Wayne"
    }
];

const server = http.createServer((req, res) => {

    if (req.url === "/api/users" && req.method === "GET")
    {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.write(JSON.stringify(users));
        res.end();
    }
    else if (req.url.match(/^\/api\/users\/[0-9]+$/) && req.method === "GET")
    {
        const targetId = req.url.split("/").at(-1);
        const targetUser = users.find(user => user.id === +targetId);

        res.setHeader("Content-Type", "application/json");
        
        if (!targetUser)
        {
            res.statusCode = 404;
            res.write(JSON.stringify({ message: "user not found" }));
            res.end();
            return;
        }

        res.statusCode = 200;
        res.write(JSON.stringify(targetUser));
        res.end();
    }
    else
    {
        res.statusCode = 404;
        res.setHeader("Content-Type", "application/json");
        res.write(JSON.stringify({ message: "Route not found" }));
        res.end();
    }
});

server.listen(PORT, HOSTNAME, () => {

    console.log(`Server 2 is running at http://${HOSTNAME}:${PORT}/`);
});