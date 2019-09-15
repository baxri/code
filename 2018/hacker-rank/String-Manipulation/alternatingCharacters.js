


function alternatingCharacters(s) {

    s = s.split('');

    let numbersofDeleion = 0;
    let i = 0;

    while (i < s.length) {

        let current = s[i];
        let next = s[i + 1];

        if (current == next) {
            s.splice(i + 1, 1);
            numbersofDeleion++;
        }else{
            i++;
        }       
    }

    return numbersofDeleion;
}


// console.log(alternatingCharacters("ABABABAB"));
console.log(alternatingCharacters("AAAA"));
