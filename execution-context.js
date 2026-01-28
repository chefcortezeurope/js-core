//JS Execution Context & Hoisting 

console.log(a); // this print undefined because the variable is hoisted
var a = 10;

//Uncommenting the line below throws ReferenceError 
//console.log(b)
let b = 20 

// In backend development `var` should be avoided because it allows
// access to variables before initialization (undefined), which can
// create silent and hard-to-debug bugs in production systems.