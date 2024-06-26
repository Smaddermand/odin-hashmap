// src/dom.js

// this file contains the js logic for dom manipulation

// example on how to import classes --> import { RandomApp } from './application';

import HashMap from "./hashmap";

const newHashMap = new HashMap(); // create the instance of the class HashMap --> Initializes an array of 16

console.log("hello, let's go"); // just to check it is running

console.log(newHashMap.hash("Soren")); // find the array for me to check later
newHashMap.set("Soren", "Soren is bad ass") // add key-value pair to the hash
newHashMap.set("SorenB", "Soren is still bad ass") // add key-value pair to the hash
newHashMap.set("SorenC", "Soren is very bad ass") // add key-value pair to the hash


console.log(newHashMap.buckets[15]); // retrieve the bucket were we just wrote Soren to - should return an object
console.log("Who's a baddass?");
console.log(newHashMap.get("Soren")); // retrieve the value at the key Soren
console.log("Can you find Soren?");
console.log(newHashMap.has("Soren"));
console.log("Can you find Richie?");
console.log(newHashMap.has("Richie"));
console.log("how long are you?");
console.log(newHashMap.length());
console.log("give me the keys");
console.log(newHashMap.keys())
console.log("give me the values");
console.log(newHashMap.values());
console.log("give me the key, value pair");
console.log(newHashMap.entries());

// Create a bunch to see if it recalculates length

newHashMap.set("SorenD", "Soren is bad ass") // add key-value pair to the hash
newHashMap.set("SorenE", "Soren is still bad ass") // add key-value pair to the hash
newHashMap.set("SorenF", "Soren is very bad ass") // add key-value pair to the hash
newHashMap.set("SorenG", "Soren is bad ass") // add key-value pair to the hash
newHashMap.set("SorenH", "Soren is still bad ass") // add key-value pair to the hash
newHashMap.set("SorenI", "Soren is very bad ass") // add key-value pair to the hash
newHashMap.set("SorenJ", "Soren is bad ass") // add key-value pair to the hash
newHashMap.set("SorenK", "Soren is still bad ass") // add key-value pair to the hash
newHashMap.set("SorenL", "Soren is very bad ass") // add key-value pair to the hash
newHashMap.set("SorenM", "Soren is bad ass") // add key-value pair to the hash
newHashMap.set("SorenN", "Soren is still bad ass") // add key-value pair to the hash
newHashMap.set("SorenO", "Soren is very bad ass") // add key-value pair to the hash

console.log("how long are you now?");
console.log(newHashMap.length());

console.log("now we clear you and get length again");
newHashMap.clear();
console.log(newHashMap.length());
;



console.log("I have run"); // log that everything has run

