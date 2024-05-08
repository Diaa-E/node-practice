import events from "node:events";

const emitter = new events.EventEmitter();

function greetHandler(name)
{
    console.log("Hello " + name);
}

function goodbyeHandler(name)
{
    console.log("Goodbye " + name);
}

emitter.on("greet", greetHandler);
emitter.on("goodbye", goodbyeHandler);
emitter.on("error", (err) => console.log("An error occured:",  err));

emitter.emit("greet", "walker");
emitter.emit("goodbye", "walker");
emitter.emit("error", new Error("this is a custom error"))