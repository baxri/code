function isValid(s) {
  let hash = {};

  for (let i = 0; i < s.length; i++) {
    hash[s[i]] = hash[s[i]] + 1 || 1;
  }

  let ocurencies = [];

  Object.keys(hash).map(key => {
    ocurencies.push(hash[key]);
  });

  if (is_all_element_are_same(ocurencies)) {
    return "YES";
  }

  for (let i = 0; i < ocurencies.length; i++) {
    let arr = [...ocurencies];
    arr[i]--;

    if (arr[i] == 0) {
      arr.splice(i, 1);
    }

    if (is_all_element_are_same(arr)) {
      return "YES";
    }
  }

  return "NO";
}


function is_all_element_are_same(arr) {
  const first = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (first !== arr[i]) {
      return false;
    }
  }

  return true;
}

console.log(isValid("aabbc"));
