"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
const Sorter_1 = require("./Sorter");
class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}
class LinkedList extends Sorter_1.Sorter {
    constructor() {
        super(...arguments);
        this.head = null;
        this.tail = null;
    }
    add(value) {
        const node = new Node(value);
        if (!this.tail) {
            this.head = node;
            this.tail = node;
        }
        else {
            this.tail.next = node;
            this.tail = node;
        }
    }
    get length() {
        if (!this.head) {
            return 0;
        }
        let length = 1;
        let currentNode = this.head;
        while (currentNode.next) {
            length++;
            currentNode = currentNode.next;
        }
        return length;
    }
    at(index) {
        if (!this.head) {
            throw new Error("index out of bounds");
        }
        let counter = 0;
        let currentNode = this.head;
        while (currentNode) {
            if (counter === index) {
                return currentNode;
            }
            counter++;
            currentNode = currentNode.next;
        }
        throw new Error("index out of bounds");
    }
    compare(leftIndex, rightIndex) {
        if (!this.head) {
            throw new Error("index out of bounds");
        }
        return this.at(leftIndex).value > this.at(rightIndex).value;
    }
    swap(leftIndex, rightIndex) {
        if (!this.head) {
            throw new Error("index out of bounds");
        }
        const leftNode = this.at(leftIndex);
        const rightNode = this.at(rightIndex);
        const leftValue = leftNode.value;
        const rightValue = rightNode.value;
        leftNode.value = rightValue;
        rightNode.value = leftValue;
    }
    print() {
        if (!this.head) {
            throw new Error("index out of bounds");
        }
        let currentNode = this.head;
        while (currentNode) {
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }
    }
}
exports.LinkedList = LinkedList;
