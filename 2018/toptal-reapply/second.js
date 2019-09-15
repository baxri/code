

function findWord(arr) {

    let str = [];

    for (let i = 0; i < arr.length - 1; i++) {

        let cur = arr[i].split('>');
        let next = arr[i + 1].split('>');


        if (str.length == 0) {
            str.push(cur);
        }

        if (cur[1] == next[0]) {
            str.push(next);
        }

        if (cur[0] == next[1]) {
            str.unshift(next);
        }

        console.log(str)

    }

    let s = '';

    for (let i = 0; i < str.length; i++) {

        console.log(str[i][0])

        s += str[i][0];

        if (i == str.length - 1) {
            s += str[i][1];
        }

    }

    console.log(s)

    return s;
}


console.log(findWord(["P>E", "E>R", "R>U"]))
console.log(findWord(["I>N", "A>I", "P>A", "S>P"])); // SPAIN

console.log(findWord(["U>N", "G>A", "R>Y", "H>U", "N>G", "A>R"])) // HUNGARY
console.log(findWord(["I>F", "W>I", "S>W", "F>T"])) // SWIFT
console.log(findWord(["R>T", "A>L", "P>O", "O>R", "G>A", "T>U", "U>G"]) )// PORTUGAL
console.log(findWord(["W>I", "R>L", "T>Z", "Z>E", "S>W", "E>R", "L>A", "A>N", "N>D", "I>T"]) )// SWITZERLAND