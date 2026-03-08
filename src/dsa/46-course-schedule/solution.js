function canFinish(numCourses, prerequisites) {
  const graph = Array.from({ length: numCourses }, () => []);
  const inDegree = new Array(numCourses).fill(0);
  for (const [course, prereq] of prerequisites) {
    graph[prereq].push(course);
    inDegree[course]++;
  }
  const queue = [];
  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) queue.push(i);
  }
  let processed = 0;
  while (queue.length > 0) {
    const node = queue.shift();
    processed++;
    for (const neighbor of graph[node]) {
      inDegree[neighbor]--;
      if (inDegree[neighbor] === 0) queue.push(neighbor);
    }
  }
  return processed === numCourses;
}
function canFinishDFS(numCourses, prerequisites) {
  const graph = Array.from({ length: numCourses }, () => []);
  for (const [course, prereq] of prerequisites) {
    graph[prereq].push(course);
  }
  let Color;
  ((Color2) => {
    Color2[Color2["WHITE"] = 0] = "WHITE";
    Color2[Color2["GRAY"] = 1] = "GRAY";
    Color2[Color2["BLACK"] = 2] = "BLACK";
  })(Color || (Color = {}));
  const color = new Array(numCourses).fill(0 /* WHITE */);
  function hasCycle(node) {
    color[node] = 1 /* GRAY */;
    for (const neighbor of graph[node]) {
      if (color[neighbor] === 1 /* GRAY */) return true;
      if (color[neighbor] === 0 /* WHITE */ && hasCycle(neighbor)) return true;
    }
    color[node] = 2 /* BLACK */;
    return false;
  }
  for (let i = 0; i < numCourses; i++) {
    if (color[i] === 0 /* WHITE */ && hasCycle(i)) return false;
  }
  return true;
}
export {
  canFinish,
  canFinishDFS
};
