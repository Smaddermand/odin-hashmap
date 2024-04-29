// src/linkedlist.js

import Node from "./node";



export default class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    append(value){
        const newNode = new Node(value, null);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode; // When list is empty, head and tail are the same
            console.log(`Empty - this was added ${value}`);
        } else {
            this.tail.nextNode = newNode; // Append new node after the current tail
            this.tail = newNode; // Update the tail reference to the new node
            console.log(`This was added ${value}`);
        }
    }

    prepend(value){
        const newNode = new Node(value, this.head);
        this.head = newNode;
    
        console.log(`prepend ${  value}`);
        }
    
    size(){
        let size = 0;
        let currentNode = this.head;
        while(currentNode !== null){
            size ++;
            currentNode = currentNode.nextNode;
            }
        return size;

    }

    getHead(){
        const headNode = this.head;
        return headNode;
    }

    getTail(){
        const tailNode = this.tail;
        return tailNode;
    }

    // at(index) returns the node at the given index

    at(index){
        let currentIndex = 0;
        let currentNode = this.head;
        while(currentIndex < index && currentNode !== null){
            currentNode = currentNode.nextNode;
            currentIndex++;
        }
        return currentNode;
    }

    // pop removes the last element from the list
    pop() {
        if (this.head === null) {
            console.log("Empty list");
            return; // Early return for an empty list
        }
        if (this.head.nextNode === null) {
            // List has only one node
            this.head = null; // Now the list is empty
            this.tail = null;
            return;
        }
        let currentNode = this.head;
        let previousNode = null;
        while (currentNode.nextNode !== null) {
            previousNode = currentNode;
            currentNode = currentNode.nextNode;
        }
        // At this point, currentNode is the last node, and previousNode is the second-to-last
        if (previousNode !== null) {
            previousNode.nextNode = null; // Remove the last node by setting nextNode of the new tail to null
            this.tail = previousNode;
        }
    }
    
    // contains(value) returns true if the passed in value is in the list and otherwise returns false.

    contains(value) {
        let currentNode = this.head;
        while (currentNode !== null) {
            if (currentNode.value === value) {
                return true;
            }
            currentNode = currentNode.nextNode;
        }
        return false;
    }

    // find(value) returns the index of the node containing value, or null if not found.

    find(value) {
        let currentIndex = 0;
        let currentNode = this.head;
            while(currentNode !== null){
                if(currentNode.value === value){
                    return currentIndex;
                }
                currentNode = currentNode.nextNode;
                currentIndex++;
            }   
        return null;    
    }   

    // toString represents your LinkedList objects as strings, 
    // so you can print them out and preview them in the console. 
    // The format should be: ( value ) -> ( value ) -> ( value ) -> null

    toString(){
        let currentNode = this.head;
        let string = "";
            while(currentNode !== null) {
                string += `( ${currentNode.value} ) -> `;
                currentNode = currentNode.nextNode;
            }
        string += "null";
        return string;    
    }

}



/* 

// Previous non-optimized append method that traverses the list...

append(value){
    if(this.head == null) {
        const newNode = new Node(value, null);
        this.head = newNode;
        console.log(`Empty - this was added ${  value}`);
    } else {
        let currentNode = this.head;
        while (currentNode.nextNode !== null){
            currentNode = currentNode.nextNode;
        }
        currentNode.nextNode = new Node(value, null)
        console.log(`this was added ${  value}`);
    }
}

*/




