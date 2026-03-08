import { describe, it, expect } from 'vitest';
import { Queue } from './index';

describe('Queue', () => {
  it('should enqueue and dequeue elements in FIFO order', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(3);
  });

  it('should return undefined when dequeuing empty queue', () => {
    const queue = new Queue();
    expect(queue.dequeue()).toBeUndefined();
  });

  it('should peek at the front element without removing it', () => {
    const queue = new Queue();
    queue.enqueue('a');
    queue.enqueue('b');
    expect(queue.peek()).toBe('a');
    expect(queue.size).toBe(2);
  });

  it('should report isEmpty correctly', () => {
    const queue = new Queue();
    expect(queue.isEmpty()).toBe(true);
    queue.enqueue(1);
    expect(queue.isEmpty()).toBe(false);
    queue.dequeue();
    expect(queue.isEmpty()).toBe(true);
  });

  it('should track size correctly', () => {
    const queue = new Queue();
    expect(queue.size).toBe(0);
    queue.enqueue(10);
    queue.enqueue(20);
    expect(queue.size).toBe(2);
    queue.dequeue();
    expect(queue.size).toBe(1);
  });

  it('should return undefined when peeking empty queue', () => {
    const queue = new Queue();
    expect(queue.peek()).toBeUndefined();
  });

  it('should handle interleaved enqueue and dequeue', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.dequeue()).toBe(1);
    queue.enqueue(3);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(3);
  });
});
