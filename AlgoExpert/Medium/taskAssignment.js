function taskAssignment(k, tasks) {
  const result = [];
  const indexes = {};

  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    const idxs = indexes[task] || [];
    idxs.push(i);
    indexes[task] = idxs;
  }

  tasks.sort((a, b) => a - b);

  let left = 0;
  let right = tasks.length - 1;

  while (left < right) {
    const i = indexes[tasks[left]].pop();
    const j = indexes[tasks[right]].pop();

    result.push([j, i]);

    left++;
    right--;
  }

  return result;
}

console.log(taskAssignment(3, [1, 3, 5, 3, 1, 4]));
