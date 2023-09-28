export default function heapAdapter() {
  return null;
}

export class Heap {
  numbers: number[];
  length: number; // length of the heap

  constructor(numbers: number[]) {
    this.numbers = numbers;
    this.length = numbers.length;
  }

  parent(index: number): number | null {
    if (index > 0 && index < this.length) {
      return Math.floor(index / 2) - 1;
    } else {
      return null;
    }
  }

  left(index: number): number | null {
    const leftChild = index * 2 + 1;
    if (leftChild >= 0 && leftChild < this.length) {
      return leftChild;
    } else {
      return null;
    }
  }

  right(index: number): number | null {
    const rightChild = index * 2 + 2;
    if (rightChild >= 0 && rightChild < this.length) {
      return rightChild;
    } else {
      return null;
    }
  }
}
