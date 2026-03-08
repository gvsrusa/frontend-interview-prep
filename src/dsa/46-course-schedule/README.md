# Course Schedule

## Description

There are `numCourses` courses labeled from `0` to `numCourses - 1`. You are given an array `prerequisites` where `prerequisites[i] = [a, b]` means you must take course `b` before course `a`. Determine if it is possible to finish all courses (i.e., no circular dependency exists).

## Examples

```
Input: numCourses = 2, prerequisites = [[1, 0]]
Output: true
Explanation: Take course 0 first, then course 1.

Input: numCourses = 2, prerequisites = [[1, 0], [0, 1]]
Output: false
Explanation: Courses 0 and 1 depend on each other — impossible.
```

## Constraints

- `1 <= numCourses <= 2000`
- `0 <= prerequisites.length <= 5000`
- `prerequisites[i].length == 2`
- `0 <= a, b < numCourses`
- All prerequisite pairs are unique.

## Complexity

- **Time:** O(V + E) where V = numCourses, E = number of prerequisites
- **Space:** O(V + E) for the adjacency list and auxiliary structures
