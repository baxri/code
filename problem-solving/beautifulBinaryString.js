


function beautifulBinaryString(b) {

    let i = null;
    let count = 0;

    while (true) {

        let i = b.indexOf('010');

        if (i < 0) {
            break;
        }

        let last = b[i + 2];
        let next = b[i + 3];

        b = [...b];

        if (last != next) {
            b[i + 2] = next;
        } else {
            b[i + 1] = 0;
        }

        b = b.join('');

        count++;
    }

    return count;
}

console.log(beautifulBinaryString('0101010'));
console.log(beautifulBinaryString('01100'));
console.log(beautifulBinaryString('0100101010'));