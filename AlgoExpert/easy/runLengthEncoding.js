function runLengthEncoding(string) {
  let result = "";
  let counter = 0;

  for (let i = 0; i < string.length; i++) {
    counter++;

    if (string[i] !== string[i + 1] || counter === 9) {
      result += counter + string[i];
      counter = 0;
    }
  }

  return result;
}

console.log(runLengthEncoding("AAAAAAAAAAAAABBCCCCDD"));
