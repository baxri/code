const getLetters = (digit) => {
  switch (digit) {
    case "0":
      return ["0"];
    case "1":
      return ["1"];
    case "2":
      return ["a", "b", "c"];
    case "3":
      return ["d", "e", "f"];
    case "4":
      return ["g", "h", "i"];
    case "5":
      return ["j", "k", "l"];
    case "6":
      return ["m", "n", "o"];
    case "7":
      return ["p", "q", "r", "s"];
    case "8":
      return ["t", "u", "v"];
    case "9":
      return ["w", "x", "y", "z"];
    default:
      return [];
  }
};

function phoneNumberMnemonics(phoneNumber) {
  const result = [];
  phoneNumberMnemonicsHelper(phoneNumber, 0, [], result);
  return result;
}

function phoneNumberMnemonicsHelper(phoneNumber, idx, permutation, result) {
  if (idx === phoneNumber.length) {
    result.push(permutation.join(""));
  } else {
    const digit = phoneNumber[idx];
    const symbols = getLetters(digit);

    console.log(symbols);

    for (symbol of symbols) {
      const newPermutation = [...permutation, symbol];
      phoneNumberMnemonicsHelper(phoneNumber, idx + 1, newPermutation, result);
    }
  }
}

console.log(phoneNumberMnemonics("1905"));
