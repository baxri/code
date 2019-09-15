

function pangrams(s) {

    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let alphabet_hashmap = {};

    [...alphabet].map((char => {
        alphabet_hashmap[char] = true;
    }))

    s = [...s.toUpperCase().replace(/ /g, '')].map(char => {
        delete (alphabet_hashmap[char]);
    });

    return Object.keys(alphabet_hashmap).length == 0 ? 'pangram' : 'not pangram';
}


console.log(pangrams('We promptly judged antique ivory buckles for the next prize'))
console.log(pangrams('We promptly judged antique ivory buckles for the prize'))