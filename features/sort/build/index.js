"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumbersCollection_1 = require("./NumbersCollection");
const CharactersCollection_1 = require("./CharactersCollection");
const LinkedList_1 = require("./LinkedList");
// Array of numbers
console.log("Array of Numbers========");
const numbers = new NumbersCollection_1.NumbersCollection([10, 3, -5, 0]);
numbers.sort();
console.log(numbers.data);
// String
console.log("String========");
const charCollection = new CharactersCollection_1.CharactersCollection("Xaayb");
charCollection.sort();
console.log(charCollection.data);
// Linked List
console.log("Linked List======");
const linked = new LinkedList_1.LinkedList();
linked.add(10);
linked.add(3);
linked.add(-5);
linked.add(0);
linked.sort();
linked.print();
