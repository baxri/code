

let s1 = 'waterbottle';
let s2 = 'erbottlewat';

console.log(isSubstring(s1, s2));

function isSubstring(s1, s2) {

    console.log();

    for (let i = 0; i < s1.length; i++) {

        let prefix = s1.slice(0, i);
        let sufix = s1.slice(i);

        let word = sufix + prefix;

        if (s2 == word) {
            return true;
        }

    }


    return false;
}