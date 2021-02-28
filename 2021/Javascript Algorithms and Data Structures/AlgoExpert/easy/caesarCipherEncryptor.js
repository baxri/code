function caesarCipherEncryptor(string, k) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const alphabetHash = {};

  const key = k % alphabet.length;

  let encryptedString = [];

  for (let i = 0; i < alphabet.length; i++) {
    alphabetHash[alphabet[i]] = i;
  }

  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    const newIndex = (alphabetHash[char] + key) % alphabet.length;
    encryptedString.push(alphabet[newIndex]);
  }

  return encryptedString.join("");
}

console.log(caesarCipherEncryptor("xyz", 2));
