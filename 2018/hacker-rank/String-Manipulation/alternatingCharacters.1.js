


function alternatingCharacters(s) {

    s = s.split('');

    let numbersOfDeletion = 0;
    let i = 0;
    

    while (i < s.length) {

        let current = s[i];
        let next = s[i + 1];

        if (current == next) {
            // s.splice(i + 1, 1);
            numbersOfDeletion++;
        }  
        
        i++;
    }

    return numbersOfDeletion;
}


// console.log(alternatingCharacters("ABABABAB"));
console.log(alternatingCharacters("AAAA"));
