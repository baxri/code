

let str = 'aabcccccaaa';

function stringCompression(str) {

    let compresedString = '';
    let compressDigit = 1;

    for (let i = 0; i < str.length; i++) {

        if (str[i] == str[i + 1]) {
            compressDigit++;
        } else {
            compresedString += str[i] + compressDigit;
            compressDigit = 1;
        }

    }

    return compresedString;
}

console.log(stringCompression(str));