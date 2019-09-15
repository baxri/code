

function sherlockAndAnagrams(str) {

    let substrings = {};
    let count = 0;

    for (let i = 1; i < str.length; i++) {
        for (let j = 0; j + i <= str.length; j++) {

            let substring = [...str.substr(j, i)].sort().join('');

            if (substrings[substring]) {
                count += substrings[substring];
                substrings[substring]++;
            } else {
                substrings[substring] = 1;
            }
        }
    }

    return count;
}


function isAnagrams(str1, str2) {

    str1 = [...str1].sort().join('');
    str2 = [...str2].sort().join('');

    if (str1 == str2) {
        return true;
    }

    return false;
}

// console.log(sherlockAndAnagrams('abba'))
console.log(sherlockAndAnagrams('cdcd'))
// console.log(sherlockAndAnagrams('kkkk'))

// console.log(isAnagrams('listen', 'silent'))
// console.log(isAnagrams('triangle', 'integral'))
// console.log(isAnagrams('tfile', 'trafle'))