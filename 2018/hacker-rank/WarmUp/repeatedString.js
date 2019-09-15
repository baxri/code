

function repeatedString(s, n) {

    // How many time I need to repeat my s string
    let strings = Math.ceil(n / s.length);

    // Calculate unused letters
    let morenumbers = strings * s.length - n;

    // Get left side chars
    let left = s.slice(0, s.length - morenumbers)

    // Get right side chars
    let right = morenumbers > 0 ? s.slice(morenumbers * -1) : "";

    let a_count_left = 0;
    let a_count_right = 0;

    // Calculate left chars (a)
    for (let i = 0; i < left.length; i++) {
        if (left[i] == 'a') {
            a_count_left++;
        }
    }

    // Calculate right chars (a)
    for (let i = 0; i < right.length; i++) {
        if (right[i] == 'a') {
            a_count_right++;
        }
    }

    return (a_count_left + a_count_right) * strings - a_count_right;
}


console.log(repeatedString("ababa", 3));
console.log(repeatedString("aba", 10));
console.log(repeatedString("a", 1000));