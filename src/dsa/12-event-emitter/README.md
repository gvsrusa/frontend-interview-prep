# Event Emitter

## Description

Implement an `EventEmitter` class with `on`, `off`, `emit`, and `once` methods, following the observer/pub-sub pattern.

## Examples

```
const emitter = new EventEmitter();

const handler = (msg) => console.log(msg);
emitter.on('greet', handler);
emitter.emit('greet', 'Hello!');  // logs 'Hello!'
emitter.off('greet', handler);
emitter.emit('greet', 'Hi!');     // nothing happens

emitter.once('init', () => console.log('initialized'));
emitter.emit('init');  // logs 'initialized'
emitter.emit('init');  // nothing happens
```

## Constraints

- `on(event, listener)` — registers a listener for the event.
- `off(event, listener)` — removes a specific listener.
- `emit(event, ...args)` — calls all listeners for the event with the given args. Returns `true` if listeners existed, `false` otherwise.
- `once(event, listener)` — registers a listener that fires only once.
- Support method chaining (return `this` from `on`, `off`, `once`).

## Complexity

- **Time:** O(1) for on/off/once, O(n) for emit where n is the number of listeners
- **Space:** O(n) where n is total registered listeners
