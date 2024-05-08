export default function logRequest(req, res, next)
{
    console.log(`Method: ${req.method}, url: ${req.url}`);
    next();
}