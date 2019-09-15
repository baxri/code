


function hackerrankInString(s) {

    const original = 'hackerrank';
    let currentIndex = -1;

    for (let i = 0; i < original.length; i++) {

        let index = getIndex(currentIndex, s, original[i]);

        if (index === null) {
            return 'NO';
        }

        currentIndex = index;
    }

    return "YES";
}

function getIndex(currentIndex, s, char) {
    for (let i = currentIndex + 1; i < s.length; i++) {
        if (s[i] == char) {
            return i;
        }
    }
    return null;
}


console.log(hackerrankInString('hereiamstackerrank'))
console.log(hackerrankInString('hackerworld'))