#!/usr/bin/env node

"use strict"

/////////////////////////////////// LEARNING ///////////////////////////////////
// This gives us an object listing the version strings of Node.js and its dependencies.
// console.log("All Versions= \n", process.versions);

// // Initial setup
// console.log("Node.js version:", process.versions.node);      // requesting only node
// console.log("JS V8 Version:", process.versions.v8);          // requesting only V8


//////////////////////////// EXECUTE with "./02.js" ////////////////////////////
// Use ES6 Destructuring Assignment to extract the two variables from the versions object
let verObj = process.versions
const { node, v8 } = verObj                                     // Destructured Version
console.log("Destructured:\nNode.js version:",node,"\nJS V8 Version:",v8);


/////////////////////////////////// PRACTICE ///////////////////////////////////
// process.stdout.write(`
//   N O D E
//   V E R S I O N ${process.versions.node} 
//     asdf 
//       asdf
//   \n`);

// // process.stdout.write("~V8~ Version= ", process.versions.v8);   // does not work like a console.log(); - can't have "," without string interpolation 

// const nodeVer = process.versions.node
// const v8Ver = process.versions.v8
// // Use a single call to console.log
// process.stdout.write(`Hey there! FYI:
//   Node's version is: ${nodeVer}\nV8's version is ${v8Ver}\n\n`)
