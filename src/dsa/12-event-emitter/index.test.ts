import { describe, it, expect, vi } from 'vitest';
import { EventEmitter } from './index';

describe('EventEmitter', () => {
  it('should register and emit events', () => {
    const emitter = new EventEmitter();
    const fn = vi.fn();
    emitter.on('test', fn);
    emitter.emit('test', 'arg1');
    expect(fn).toHaveBeenCalledWith('arg1');
  });

  it('should support multiple listeners', () => {
    const emitter = new EventEmitter();
    const fn1 = vi.fn();
    const fn2 = vi.fn();
    emitter.on('test', fn1);
    emitter.on('test', fn2);
    emitter.emit('test');
    expect(fn1).toHaveBeenCalledOnce();
    expect(fn2).toHaveBeenCalledOnce();
  });

  it('should remove a specific listener with off', () => {
    const emitter = new EventEmitter();
    const fn = vi.fn();
    emitter.on('test', fn);
    emitter.off('test', fn);
    emitter.emit('test');
    expect(fn).not.toHaveBeenCalled();
  });

  it('should handle once — listener fires only once', () => {
    const emitter = new EventEmitter();
    const fn = vi.fn();
    emitter.once('test', fn);
    emitter.emit('test');
    emitter.emit('test');
    expect(fn).toHaveBeenCalledOnce();
  });

  it('should return false when emitting event with no listeners', () => {
    const emitter = new EventEmitter();
    expect(emitter.emit('nonexistent')).toBe(false);
  });

  it('should pass multiple arguments to listeners', () => {
    const emitter = new EventEmitter();
    const fn = vi.fn();
    emitter.on('test', fn);
    emitter.emit('test', 1, 'two', true);
    expect(fn).toHaveBeenCalledWith(1, 'two', true);
  });

  it('should handle off for non-existent event gracefully', () => {
    const emitter = new EventEmitter();
    expect(() => emitter.off('nonexistent', () => {})).not.toThrow();
  });
});
