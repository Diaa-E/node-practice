import crypto, { Decipher } from "node:crypto";

const hash = crypto.createHash('sha256');
hash.update("password123");
console.log("hex hash: " + hash.digest("hex"));

crypto.randomBytes(16, (err, buf) => {

    if (err) throw err;
    console.log("random string: " + buf.toString("hex"));
});

const cipherAlogrithm = "aes-256-cbc";
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);
const cipher = crypto.createCipheriv(cipherAlogrithm, key, iv);
let encrypted = cipher.update("hello world", "utf-8", "hex");
encrypted += cipher.final("hex");

console.log("encrypted message:");
console.log(encrypted);

const decipher = crypto.createDecipheriv(cipherAlogrithm, key, iv);
let decrypted = decipher.update(encrypted, "hex", "utf-8");
decrypted += decipher.final("utf-8");

console.log("decrypted message:");
console.log(decrypted);