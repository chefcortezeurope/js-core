//Call Stack example
// This example demostrate how JS uses the call stack 
// to determine the order of synchronous functions. 

function first() {
    console.log("first");
}

function second(){
    first();
    console.log("second");
}

second();