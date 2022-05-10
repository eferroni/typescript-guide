import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

// Array of numbers
console.log("Array of Numbers========");
const numbers = new NumbersCollection([10, 3, -5, 0]);
numbers.sort();
console.log(numbers.data);

// String
console.log("String========");
const charCollection = new CharactersCollection("Xaayb");
charCollection.sort();
console.log(charCollection.data);

// Linked List
console.log("Linked List======");
const linked = new LinkedList();
linked.add(10);
linked.add(3);
linked.add(-5);
linked.add(0);

linked.sort();
linked.print();
