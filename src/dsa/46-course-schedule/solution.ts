/** BFS approach — Kahn's algorithm (topological sort) */
export function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  const graph: number[][] = Array.from({ length: numCourses }, () => []);
  const inDegree = new Array(numCourses).fill(0);

  for (const [course, prereq] of prerequisites) {
    graph[prereq].push(course);
    inDegree[course]++;
  }

  const queue: number[] = [];
  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) queue.push(i);
  }

  let processed = 0;
  while (queue.length > 0) {
    const node = queue.shift()!;
    processed++;
    for (const neighbor of graph[node]) {
      inDegree[neighbor]--;
      if (inDegree[neighbor] === 0) queue.push(neighbor);
    }
  }

  return processed === numCourses;
}

/** DFS approach — cycle detection with coloring */
export function canFinishDFS(numCourses: number, prerequisites: number[][]): boolean {
  const graph: number[][] = Array.from({ length: numCourses }, () => []);
  for (const [course, prereq] of prerequisites) {
    graph[prereq].push(course);
  }

  const enum Color { WHITE, GRAY, BLACK }
  const color = new Array(numCourses).fill(Color.WHITE);

  function hasCycle(node: number): boolean {
    color[node] = Color.GRAY;
    for (const neighbor of graph[node]) {
      if (color[neighbor] === Color.GRAY) return true;
      if (color[neighbor] === Color.WHITE && hasCycle(neighbor)) return true;
    }
    color[node] = Color.BLACK;
    return false;
  }

  for (let i = 0; i < numCourses; i++) {
    if (color[i] === Color.WHITE && hasCycle(i)) return false;
  }
  return true;
}
