# LRU Cache

## Description

Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

Implement the `LRUCache` class:

- `constructor(capacity)` — Initialize the LRU cache with positive size `capacity`.
- `get(key)` — Return the value of the key if it exists, otherwise return `-1`.
- `put(key, value)` — Update the value of the key if it exists. Otherwise, add the key-value pair. If the number of keys exceeds the capacity, evict the least recently used key.

Both `get` and `put` must run in **O(1)** average time complexity.

## Examples

```
const cache = new LRUCache(2);
cache.put(1, 1);   // cache: {1=1}
cache.put(2, 2);   // cache: {1=1, 2=2}
cache.get(1);      // => 1, cache: {2=2, 1=1}
cache.put(3, 3);   // evicts key 2, cache: {1=1, 3=3}
cache.get(2);      // => -1 (not found)
cache.put(4, 4);   // evicts key 1, cache: {3=3, 4=4}
cache.get(1);      // => -1 (not found)
cache.get(3);      // => 3
cache.get(4);      // => 4
```

## Constraints

- `1 <= capacity <= 3000`
- `0 <= key <= 10^4`
- `0 <= value <= 10^5`
- At most `2 * 10^5` calls will be made to `get` and `put`.

## Complexity

- **Time:** O(1) for both get and put
- **Space:** O(capacity) for the hash map and doubly linked list
