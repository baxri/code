

function isPalindrome(str) {

    for (let i = 0; i < str.length/2; i++) {

        let left = str[i];
        let right = str[str.length - 1 - i];

        if (left != right) {
            return false;
        }
    }

    return true;
}

console.log(isPalindrome('abba'));