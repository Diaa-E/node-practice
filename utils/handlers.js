import { users } from "../data/users.js";

export function jsonMiddleware(req, res, next)
{
    res.setHeader("Content-Type", "application/json");
    next();
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