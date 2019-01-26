


function alternatingCharacters(s) {

    s = [...s];
    let deletions = 0;

    for (let i = 0; i < s.length; i++) {

        let current = s[i];
        let next = s[i + 1];

        if (current == next) {
            s.splice(i, 1);
            i--;
            deletions++;
        }

    }

    return deletions;
}


alternatingCharacters('AAAA');
alternatingCharacters('BBBBB');
alternatingCharacters('ABABABAB');
alternatingCharacters('BABABA');
alternatingCharacters('AAABBB');