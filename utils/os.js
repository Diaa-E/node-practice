import os from "node:os";

console.log(`user info: ${JSON.stringify(os.userInfo())}`);
console.log(`total memory: ${os.totalmem() / 1000000000} gb`);
console.log(`free memory: ${os.freemem() / 1000000000} gb`);
console.log(`CPUs: ${os.cpus().length}`);