import url from "node:url";

const urlString = "https://www.google.com/search?q=hello+world";

const urlObject = new URL(urlString);

console.log(`- url object:`);
console.log(urlObject);

console.log("- url formatted:");
console.log(url.format(urlObject));

console.log("- current file url:");
console.log(import.meta.url);

console.log("- current file path:");
console.log(url.fileURLToPath(import.meta.url));

const searchParams = new URLSearchParams(urlObject.search);

console.log("- Search params object:");
console.log(searchParams);

searchParams.append("limit", "5");

console.log("- modified params:");
console.log(searchParams);

searchParams.delete("limit")

console.log("- removed limit param:");
console.log(searchParams)