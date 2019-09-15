


function separateNumbers(s) {

    let length = 1;
    let fine = 'NO'
    let smalest = null;

    while (length < s.length) {

        fine = 'YES';
        smalest = null;
        let currentLength = length;
        for (let i = 0; i < s.length;) {

            let l = currentLength;
            let start = parseInt([...s].splice(i, currentLength).join(''));
            let exp = start + 1;

            if (smalest === null) {
                smalest = start;
            }

            currentLength = exp.toString().length;
            let got = parseInt([...s].splice(i + l, currentLength).join(''));

            if (isNaN(got)) {
                break;
            }

            if (exp != got) {
                fine = 'NO';
                break;
            }

            i += l;
        }

        if (fine == 'YES') {
            break;
        }

        length++;
    }

    if (fine == "YES") {
        console.log(fine + " " + smalest);
    } else {
        console.log(fine);
    }
}

console.log(separateNumbers('91011'))
console.log(separateNumbers('1234'))
console.log(separateNumbers('99100'))
console.log(separateNumbers('101103'))
console.log(separateNumbers('010203'))
console.log(separateNumbers('13'))
console.log(separateNumbers('1'))
console.log(separateNumbers('12'))
console.log(separateNumbers('99100'))