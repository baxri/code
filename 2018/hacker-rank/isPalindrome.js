

function isPalindrome(word) {
    // Please write your code here.
    word = word.toLowerCase();
    word = word.split('');

    for (let i = 0; i < word.length / 2; i++) {

        let left = word[i];
        let right = word[word.length - i - 1];

        if (left != right) {
            return false;
        }
    }

    return true;
}

console.log(isPalindrome('Deleveled'));