import * as fsCallback from "node:fs";
import * as fsPromise from "node:fs/promises";

function readFileCallback()
{
    fsCallback.readFile("./data/file.txt", "utf-8", (err, data) => {
    
        if (err) throw err;
        console.log(`Callback: ${data}`);
    });
}

function readFileSync()
{
    const data = fsCallback.readFileSync("./data/file.txt");
    console.log(`sync: ${data}`);
}

function readFilePRomise()
{
    fsPromise.readFile("./data/file.txt", "utf-8")
        .then((data) => console.log(`Promise: ${data}`))
        .catch((error) => console.log(error));
}

async function readFileAwait()
{
    try
    {
        const data = await fsPromise.readFile("./data/file.txt");
        console.log(`Promise (await): ${data}`)
    }
    catch (err)
    {
        console.log(err);
    }
}

readFileCallback();
readFileSync();
readFilePRomise();
readFileAwait();