


function checkMagazine(magazine, note) {

    magazine = magazine.split(" ");
    note = note.split(" ");

    magazineHashMap = {};

    magazine.map(word => {
        if (typeof magazineHashMap[word] == "undefined") {
            magazineHashMap[word] = 1;
        } else {
            magazineHashMap[word]++;
        }
    });

    for (let i = 0; i < note.length; i++) {

        let word = note[i];

        if (typeof magazineHashMap[word] == "undefined" || magazineHashMap[word] < 1) {
            return false;
        }

        magazineHashMap[word]--;
    }

    return true;
}


console.log(checkMagazine(
    "give me one grand today night",
    "give one grand today"
));

console.log(checkMagazine(
    "two times three is not four",
    "two times two is four"
));

console.log(checkMagazine(
    "ive got a lovely bunch of coconuts",
    "ive got some coconuts"
));