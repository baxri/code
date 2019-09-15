


function twoStrings(s1, s2) {
    let s1Hash = {};
    [...s1].map(char => s1Hash[char] = true);

    let result = "No";

    [...s2].map(char => {
        if (typeof s1Hash[char] !== "undefined") {
            result = "Yes";
        }
    });
    return result;
}


console.log(twoStrings("hello", "world"))