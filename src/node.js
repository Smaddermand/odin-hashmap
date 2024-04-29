// src/node.js

// This contains the Node class


export default class Node {
    constructor(value = null, nextNode = null){
        this.value = value;
        this.nextNode = nextNode;
    }
}


