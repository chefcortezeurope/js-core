// Demostrates how await pauses an async function without blocking JS

console.log("start");

async function test () {
    console.log("inside");
    await Promise.resolve();
    console.log("after await");
}

test()

console.log("end");