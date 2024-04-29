// hashmap.js

// eslint-disable-next-line no-unused-vars
import LinkedList from "./linkedlist";

export default class HashMap {
    constructor(){
        this.buckets = new Array(16).fill(null).map(() => new LinkedList());
    }

    // eslint-disable-next-line class-methods-use-this
    hash(key) {
        let hashCode = 0;
        const primeNumber = 31;

        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
            }
        hashCode %= 16;
        return hashCode;
    }

    // set(key, value) takes two arguments, the first is a key and the second is a value that is assigned to this key.
    set(key, value) {
        const index = this.hash(key); // hashCode now has a value of 0 to 15 corresponding to the array index

        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bound");
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
    }

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


*/