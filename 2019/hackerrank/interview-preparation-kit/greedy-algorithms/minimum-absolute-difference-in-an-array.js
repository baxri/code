function minimumAbsoluteDifference(arr) {
    let min = null;
  
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        let diference = Math.abs(arr[i] - arr[j]);
  
        if (diference < min || min === null) {
          min = diference;
        }
      }
    }
    return min
  }


function minimumAbsoluteDifference(arr) {
  let min = null;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let diference = Math.abs(arr[i] - arr[j]);

      if (diference < min || min === null) {
        min = diference;
      }
    }
  }
  return min
}

console.log(minimumAbsoluteDifference([-2, 2, 4]));
