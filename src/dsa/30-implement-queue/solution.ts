export class Queue {
  #storage = {};
  #head = 0;
  #tail = 0;

  enqueue(value) {
    this.#storage[this.#tail] = value;
    this.#tail++;
  }

  dequeue() {
    if (this.isEmpty()) return undefined;
    const value = this.#storage[this.#head];
    delete this.#storage[this.#head];
    this.#head++;
    return value;
  }

  peek() {
    if (this.isEmpty()) return undefined;
    return this.#storage[this.#head];
  }

  isEmpty() {
    return this.#tail - this.#head === 0;
  }

  get size() {
    return this.#tail - this.#head;
  }
}
