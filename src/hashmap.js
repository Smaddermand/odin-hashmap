// hashmap.js


/* NOTE: There is still an issue with the increaseHashMapSize function.. I think.. */

// eslint-disable-next-line no-unused-vars
import LinkedList from "./linkedlist";

export default class HashMap {
    constructor(){
        this.hashMapSize = 16;
        this.entryCount = 0;
        this.buckets = new Array(this.hashMapSize).fill(null).map(() => new LinkedList());

    }

    // eslint-disable-next-line class-methods-use-this
    hash(key) {
        let hashCode = 0;
        const primeNumber = 31;

        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
            }
        hashCode %= this.hashMapSize;
        return hashCode;
    }

    // calculate loadFactor
    loadFactorToHigh() {
        console.log("Load factor calculated");
        if(this.entryCount > 0.75 * this.hashMapSize) {
            return true
        } 
            return false
    }

    // increase bucket count
    increaseHashMapSize(){

        const tempBucket = this.buckets; // store a copy
        this.hashMapSize *= 2; // increase the hashMapSize
        this.clear(); // clear the bucket

        
        for(let i = 0; i < tempBucket.length; i++ ) {
            const bucketLinkedList = tempBucket[i];
            let currentNode = bucketLinkedList.head;
            while(currentNode!== null) {
                if(currentNode.value && currentNode.value.key !== null) {
                    this.set(currentNode.value.key, currentNode.value.value);
                }
            
            currentNode = currentNode.nextNode;

            
        }
        console.log("I increased hashMapSize");
        }
    }

    // set(key, value) takes two arguments, the first is a key and the second is a value that is assigned to this key.
    set(key, value) {
        const index = this.hash(key); // hashCode now has a value of 0 to 15 corresponding to the array index

        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bound");
          }

        if(this.loadFactorToHigh() === true) { // if load factor to high then increase hashmap size
            this.increaseHashMapSize();
            console.log(`The size of the hash map is now ${this.hashMapSize}`);
        }

        // check if a linkedList exists at the bucket index


        // retrieve the LinkedList
        const bucketLinkedList = this.buckets[index];

        // check if key/value already exists
        let currentNode = bucketLinkedList.head;
        while (currentNode !== null) {
            if (currentNode.value && currentNode.value.key === key) {
                currentNode.value.value = value; // update the existing value
                return; // Exit to not appending a duplicate
            }
            currentNode = currentNode.nextNode; // traverse the linkedlist to look for the key/value
        }

        // if key is not found, append new node with key-value pair
        bucketLinkedList.append({ key, value})
        this.entryCount++; // add, to keep count of entries
    }

    // get(key) takes one argument as a key and returns the value that is assigned to this key. If a key is not found, return null.
    get(key) {
        // get the index / hashCode for the key
        const index = this.hash(key);

        // retrieve the LinkedList at index
        const bucketLinkedList = this.buckets[index];

        // find the key/value
        let currentNode = bucketLinkedList.head;
        while (currentNode !== null) {
            if(currentNode.value.key === key) {
                return currentNode.value.value
            } 
            currentNode = currentNode.nextNode;
        }
        return null; // return null if not found
    };

    // has(key) takes a key as an argument and returns true or false based on whether or not the key is in the hash map
    has(key) {
        const index = this.hash(key);
        const bucketLinkedList = this.buckets[index];
        let currentNode = bucketLinkedList.head;
        while(currentNode !== null) {
            if(currentNode.value.key === key) {
                return true
            }
            currentNode = currentNode.nextNode;
        }
        return false;

    }

    // remove(key) takes a key as an argument. If the given key is in the hash map, it should remove the entry with that key and return true. 
    // If the key isn’t in the hash map, it should return false.

    remove(key) {
        const index = this.hash(key);
        const bucketLinkedList = this.buckets[index];
        let currentNode = bucketLinkedList.head;
        
        // Special case: the head node is the one to be removed
        if (currentNode !== null && currentNode.value.key === key) {
            bucketLinkedList.head = currentNode.nextNode; // move the head to the next node
            this.entryCount--;
            return true;
        }
        
        
        // General case: the node to remove is not the head
        let previousNode = null;
        
        while(currentNode !== null) {
            if(currentNode.value.key === key) {
                previousNode.nextNode = currentNode.nextNode
                this.entryCount--;
                return true;
            }
            previousNode = currentNode;
            currentNode = currentNode.nextNode;
        }
        return false; // Key not found
    }

    // length() returns the number of stored keys in the hash map.

    length() {
        // Guess I need to traverse the whole array/entire bucket and all the LinkedLists pr bucket
        let numberOfKeys = 0;
        for (let i = 0; i < this.buckets.length; i++) {
            const bucketLinkedList = this.buckets[i];
            let currentNode = bucketLinkedList.head;
            while(currentNode!== null) {
                if(currentNode.value && currentNode.value.key !== null) {
                    numberOfKeys++; 
                }
            
            currentNode = currentNode.nextNode;
            }
        }
        return numberOfKeys;
    }

    // clear() removes all entries in the hash map.
    clear() {
        // Remove the reference --> i.e. set the head to null again?

        for (let i = 0; i < this.hashMapSize; i++) {
            this.buckets[i] = new LinkedList();
            this.entryCount = 0;
        }
    }

    // keys() returns an array containing all the keys inside the hash map.
    keys() {
        const array = [];
        let arrayIndex = 0;

        for (let i = 0; i < this.buckets.length; i++) {
            const bucketLinkedList = this.buckets[i];
            let currentNode = bucketLinkedList.head;
            while(currentNode!== null) {
                if(currentNode.value && currentNode.value.key !== null) {
                    array[arrayIndex] = currentNode.value.key
                    arrayIndex++;
                }
            
            currentNode = currentNode.nextNode;
            }
        }
        return array;
    }

    // values() returns an array containing all the values.
    values() {
        const array = [];
        let arrayIndex = 0;

        for (let i = 0; i < this.buckets.length; i++) {
            const bucketLinkedList = this.buckets[i];
            let currentNode = bucketLinkedList.head;
            while(currentNode!== null) {
                if(currentNode.value && currentNode.value.key !== null) {
                    array[arrayIndex] = currentNode.value.value
                    arrayIndex++;
                }
            
            currentNode = currentNode.nextNode;
            }
        }
        return array;
    }

    // entries() returns an array that contains each key, value pair. Example: [[firstKey, firstValue], [secondKey, secondValue]]

    entries () {
        const array = [];
        
        for (let i = 0; i < this.buckets.length; i++) {
            const bucketLinkedList = this.buckets[i];
            let currentNode = bucketLinkedList.head;
            while(currentNode!== null) {
                if(currentNode.value && currentNode.value.key !== null) {
                    array.push([currentNode.value.key, currentNode.value.value])
                }
            
            currentNode = currentNode.nextNode;
            }
        }
        return array; 
    }
}


/* TODO

if (index < 0 || index >= buckets.length) {
  throw new Error("Trying to access index out of bound");
}


Find ud af hvordan jeg laver selv hashmap..
Lige nu har jeg vel bare hashkey function..

En hash map:
    1: Tager et key value pair
    2: Produceser en hash code
    3: gemmer pair i en bucket

    4: Remember the load factor....


*/