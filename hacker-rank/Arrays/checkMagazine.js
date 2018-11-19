


function checkMagazine(magazine, note) {

    let magazine_hash_map = {};

    magazine.split(' ').map(word => {
        if (typeof magazine_hash_map[word] == 'undefined') {
            magazine_hash_map[word] = 1;
        } else {
            magazine_hash_map[word] += 1;
        }
    });

    let replica = true;

    note.split(' ').map(word => {

        if (typeof magazine_hash_map[word] == 'undefined') {
            replica = false;
        } else {
            if (magazine_hash_map[word] > 1) {
                magazine_hash_map[word] -= 1;
            } else {
                delete magazine_hash_map[word];
            }
        }

    })

    return replica ? 'Yes' : 'No';
}


console.log(checkMagazine("give me one grand today night", "give one grand today"));