
let str1 = 'pale';
let str2 = 'pswe';

function oneWay(str1, str2) {

    let index1 = 0;
    let index2 = 0;
    let length = Math.max(str1.length, str2.length);
    let foundDiference = 0;

    for (let i = 0; i < length; i++) {
        if (str1[index1] != str2[index2]) {
            if (str1.length > str2.length) {
                index1++;
            } else if (str2.length > str1.length) {
                index2++;
            } else {
                index1++;
                index2++;
            }

            if (foundDiference >= 1) {
                return false;
            }

            foundDiference++;
        } else {
            index1++;
            index2++;
        }
    }

    return true;
}
console.log(oneWay(str1, str2));