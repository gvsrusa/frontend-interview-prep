import { describe, it, expect } from 'vitest';
import { MinStack } from './index';

describe('MinStack', () => {
  it('should push and retrieve top element', () => {
    const stack = new MinStack();
    stack.push(5);
    expect(stack.top()).toBe(5);
    stack.push(3);
    expect(stack.top()).toBe(3);
  });

  it('should track minimum after pushes', () => {
    const stack = new MinStack();
    stack.push(3);
    expect(stack.getMin()).toBe(3);
    stack.push(5);
    expect(stack.getMin()).toBe(3);
    stack.push(1);
    expect(stack.getMin()).toBe(1);
  });

  it('should update minimum after pops', () => {
    const stack = new MinStack();
    stack.push(2);
    stack.push(0);
    stack.push(3);
    expect(stack.getMin()).toBe(0);
    stack.pop();
    expect(stack.getMin()).toBe(0);
    stack.pop();
    expect(stack.getMin()).toBe(2);
  });

  it('should handle the LeetCode example', () => {
    const stack = new MinStack();
    stack.push(-2);
    stack.push(0);
    stack.push(-3);
    expect(stack.getMin()).toBe(-3);
    stack.pop();
    expect(stack.top()).toBe(0);
    expect(stack.getMin()).toBe(-2);
  });

  it('should handle duplicate minimums', () => {
    const stack = new MinStack();
    stack.push(1);
    stack.push(1);
    stack.push(1);
    expect(stack.getMin()).toBe(1);
    stack.pop();
    expect(stack.getMin()).toBe(1);
    stack.pop();
    expect(stack.getMin()).toBe(1);
  });

  it('should handle negative numbers', () => {
    const stack = new MinStack();
    stack.push(-10);
    stack.push(-20);
    stack.push(-5);
    expect(stack.getMin()).toBe(-20);
    stack.pop();
    expect(stack.getMin()).toBe(-20);
    stack.pop();
    expect(stack.getMin()).toBe(-10);
  });
});
