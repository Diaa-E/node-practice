console.log(process.argv);
console.log(process.argv.at(-1));

console.log(`conputer name: ${process.env.LOGNAME}`);

process.on("exit", () => console.log("Exiting..."))