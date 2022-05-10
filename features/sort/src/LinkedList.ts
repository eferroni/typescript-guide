import { Sorter } from "./Sorter";

class Node {
  constructor(public value: number, public next: Node | null = null) {}
}

export class LinkedList extends Sorter {
  head: Node | null = null;
  tail: Node | null = null;

  add(value: number): void {
    const node = new Node(value);

    if (!this.tail) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  get length(): number {
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

  at(index: number): Node {
    if (!this.head) {
      throw new Error("index out of bounds");
    }

    let counter = 0;
    let currentNode: Node | null = this.head;

    while (currentNode) {
      if (counter === index) {
        return currentNode;
      }
      counter++;
      currentNode = currentNode.next;
    }

    throw new Error("index out of bounds");
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error("index out of bounds");
    }
    return this.at(leftIndex).value > this.at(rightIndex).value;
  }

  swap(leftIndex: number, rightIndex: number): void {
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

  print(): void {
    if (!this.head) {
      throw new Error("index out of bounds");
    }
    let currentNode: Node | null = this.head;
    while (currentNode) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }
}
