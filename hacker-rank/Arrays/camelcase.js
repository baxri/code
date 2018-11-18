

function camelcase(s) {

    let wordsCount = 0;

    s.split('').map(char => {
        if (char.match(/[A-Z]/g)) {
            wordsCount++;
        }
    });

    return ++wordsCount;
}


console.log(camelcase("saveChangesInTheEditor"));