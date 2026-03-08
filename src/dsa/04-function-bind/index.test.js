import { describe, it, expect } from 'vitest';
import { myBind } from './index';

describe('myBind', () => {
  it('should bind this context', () => {
    const obj = { name: 'Alice' };
    function greet() {
      return `Hello, ${this.name}`;
    }
    const bound = myBind(greet, obj);
    expect(bound()).toBe('Hello, Alice');
  });

  it('should support partial application', () => {
    function add(a, b) {
      return a + b;
    }
    const add5 = myBind(add, null, 5);
    expect(add5(3)).toBe(8);
  });

  it('should support multiple partial args', () => {
    function sum(a, b, c) {
      return a + b + c;
    }
    const bound = myBind(sum, null, 1, 2);
    expect(bound(3)).toBe(6);
  });

  it('should preserve this with methods', () => {
    const person = {
      name: 'Bob',
      greet(greeting) {
        return `${greeting}, ${this.name}`;
      },
    };
    const greetBob = myBind(person.greet, person);
    expect(greetBob('Hi')).toBe('Hi, Bob');
  });

  it('should work with no extra arguments', () => {
    function identity() {
      return 42;
    }
    const bound = myBind(identity, null);
    expect(bound()).toBe(42);
  });

  it('should override this with bound context', () => {
    const obj1 = { value: 1 };
    const obj2 = { value: 2 };
    function getValue() {
      return this.value;
    }
    const bound = myBind(getValue, obj1);
    expect(bound.call(obj2)).toBe(1);
  });
});
