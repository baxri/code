

function twoStrings(s1, s2) {

    let s1_hashmap = {};
    let s2_hashmap = {};

    s1.split('').map(char => {
        s1_hashmap[char] = true;
    });

    s2.split('').map(char => {
        s2_hashmap[char] = true;
    });

    let result = 'No';

    Object.keys(s1_hashmap).map(key => {

        if( typeof s2_hashmap[key] != 'undefined' ){
            result = 'Yes';
        }

    })

    return result;
}


console.log(twoStrings("hello", "world"));
console.log(twoStrings("hi", "world"));