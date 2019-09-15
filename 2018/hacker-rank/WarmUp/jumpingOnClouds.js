

function jumpingOnClouds(c) {

    let counts = 0;

    for (let i = 0; i < c.length; i++) {

        let next = c[i + 1];
        let afternext = c[i + 2];

        if (afternext == 0) {
            counts++;
            i++;
        } else if (next == 0) {
            counts++;
        }
    }

    return counts;
}

console.log(jumpingOnClouds([0, 0, 0, 0, 1, 0]));