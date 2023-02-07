class Heap {
  constructor() {
    this.data = [];
  }
  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }
  getRightChildIndex(i) {
    return i * 2 + 2;
  }
  getLeftChildIndex(i) {
    return i * 2 - 1;
  }
  swap(i1, i2) {
    const temp = this.data[i1];
    this.data[i1] = this.data[i2];
    this.data[i2] = temp;
  }
  push(key) {
    this.data[this.data.length] = key;
    this.heapifyUp();
  }
  heapifyUp() {
    let currentIndex = this.data.length - 1;
    while (
      this.data[currentIndex] < this.data[this.getParentIndex(currentIndex)]
    ) {
      this.swap(currentIndex, this.getParentIndex(currentIndex));
      currentIndex = this.getParentIndex(currentIndex);
    }
  }
}

const heap = new Heap();
heap.push(2);
heap.push(26);
heap.push(12);
heap.push(10);
heap.push(15);
heap.push(5);
console.log(heap.data);
