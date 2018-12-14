


function taumBday(b, w, bc, wc, z) {

    let diff = Math.max(bc, wc) - (Math.min(bc, wc) + z);

    if (diff > 0) {

        let change = b;

        if (wc > bc) {
            change = w;
        }

        return Math.min(bc, wc) * (b + w) + change * z;
    } else {
        return bc * b + wc * w;
    }
}

console.log(taumBday(5, 9, 2, 3, 4));
console.log(taumBday(3, 6, 9, 1, 1));