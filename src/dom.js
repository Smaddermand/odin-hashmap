// src/dom.js

// this file contains the js logic for dom manipulation

// example on how to import classes --> import { RandomApp } from './application';

import HashMap from "./hashmap";

const newHashMap = new HashMap(); // create the instance of the class HashMap --> Initializes an array of 16

console.log("hello, let's go"); // just to check it is running

console.log(newHashMap.hash("Soren")); // find the array for me to check later
newHashMap.set("Soren", "Soren is bad ass") // add key-value pair to the hash

console.log(newHashMap.buckets[15]); // retrieve the bucket were we just wrote Soren to - should return an object
console.log("Who's a baddass?");
console.log(newHashMap.get("Soren")); // retrieve the value at the key Soren
console.log("Can you find Soren?");
console.log(newHashMap.has("Soren"));
console.log("Can you find Richie?");
console.log(newHashMap.has("Richie"));



console.log("I have run"); // log that everything has run

