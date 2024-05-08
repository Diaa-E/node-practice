import path from "node:path";
import url from "node:url";

const filePath = "./dir1/dir2/file.ext";

console.log(`File path: ${filePath}`);
console.log(`basename: ${path.basename(filePath)}`);
console.log(`dirname: ${path.dirname(filePath)}`);
console.log(`extname: ${path.extname(filePath)}`);
console.log(`parse: ${JSON.stringify(path.parse(filePath))}`);

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(`__filename: ${__filename}`);
console.log(`__dirname: ${__dirname}`);
console.log(`Joined path: ${path.join(__dirname, filePath)}`);
console.log(`Resolved path: ${path.resolve("./data/file.txt")}`)