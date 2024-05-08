import { users } from "../data/users.js";

export function jsonMiddleware(req, res, next)
{
    res.setHeader("Content-Type", "application/json");
    next();
}

// Route handler for POST /api/user
export function createUser(req, res)
{
    let body = "";

    req.on("data", (chunk) => {

        body += chunk.toString();
    });

    req.on("end", () => {

        const newUser = JSON.parse(body);
        users.push(newUser);
        res.statusCode = 201;
        res.write(JSON.stringify(newUser));
        res.end();
    });
}

// Route handler for GET /api/users
export function getAllUsers(req, res)
{
    res.statusCode = 200;
    res.write(JSON.stringify(users));
    res.end();
}

// Route handler for GET /api/users/:id
export function getUser(req, res)
{
    const targetId = req.url.split("/").at(-1);
    const targetUser = users.find(user => user.id === +targetId);

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

// Route handler for not found
export function returnNotFound(req, res)
{
    res.statusCode = 404;
    res.write(JSON.stringify({ message: "Route not found" }));
    res.end();
}

// no postman
// fetch("http://127.0.0.1:3000/api/users", { 
//     method: "POST",
//     body: JSON.stringify({id: 4, name: "jack benton"}),
//     headers: {"Content-type": "application/json; charset=UTF-8"},
//     mode: "no-cors",
// })
// .then(response => console.log(response));

// or use httpie, it's local.