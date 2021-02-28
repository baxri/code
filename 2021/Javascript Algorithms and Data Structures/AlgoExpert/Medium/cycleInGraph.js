function cycleInGraph(edges) {
  const isVisited = new Array(edges.length).fill(false);
  const inStack = new Array(edges.length).fill(false);

  for (let node = 0; node < edges.length; node++) {
    if (isVisited[node]) continue;

    const isCycle = inCycle(edges, node, isVisited, inStack);

    if (isCycle) {
      return true;
    }
  }

  return false;
}

function inCycle(edges, node, isVisited, inStack) {
  if (!isVisited[node]) {
    isVisited[node] = true;
    inStack[node] = true;

    for (child of edges[node]) {
      const isCycle = inCycle(edges, child, isVisited, inStack);

      if (isCycle) {
        return true;
      }
    }
  } else {
    if (inStack[node]) {
      return true;
    }
  }

  inStack[node] = false;

  return false;
}

console.log(cycleInGraph([[1, 3], [2, 3, 4], [0], [], [2, 5], []]));
