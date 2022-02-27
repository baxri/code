function spiralTraverse(array) {
  const result = [];

  let diameter = array.length;
  let point = [0, 0];

  while (diameter > 2) {
    traversePerimeter(array, [...point, 1], diameter, result);

    point[0]++;
    point[1]++;

    diameter--;
  }

  return result;
}

function traversePerimeter(array, startPoint, dimension, result) {
  let point = startPoint;

  do {
    result.push(array[point[0]][point[1]]);
    point = nextPoint(array, point, dimension);
  } while (point);
}

function nextPoint(array, point, dimension) {
  const borderOne = array.length - dimension;
  const borderTwo = dimension - 1;

  const operation = point[2];

  if (operation === 1) {
    if (borderOne <= point[1] && point[1] < borderTwo) {
      point[1]++;
    } else if (borderOne <= point[0] && point[0] < borderTwo) {
      point[0]++;
    } else {
      point[2] = -1;
      point[1]--;
    }
    return point;
  } else {
    if (borderOne < point[1] && point[1] < borderTwo) {
      point[1]--;
    } else if (borderOne + 1 < point[0] && point[0] <= borderTwo) {
      point[0]--;
    } else {
      return null;
    }

    return point;
  }
}

console.log(
  spiralTraverse([
    [7, 2, 3, 4],
    [4, 3, 4, 5],
    [1, 6, 5, 6],
    [6, 9, 8, 7],
  ])
);
