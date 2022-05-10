"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringCollection = void 0;
class StringCollection {
    constructor(data) {
        this.data = data;
    }
    swap(leftIndex, rightIndex) {
        const temp = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = temp;
    }
    compare(leftIndex, rightIndex) {
        return (this.data[leftIndex].toLowerCase().charCodeAt(0) >
            this.data[rightIndex].toLowerCase().charCodeAt(0));
    }
    get length() {
        return this.data.length;
    }
}
exports.StringCollection = StringCollection;
