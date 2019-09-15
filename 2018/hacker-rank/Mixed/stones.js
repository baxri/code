

function stones(n, a, b) {

    let possible = [
        [a, b]
    ];

    for (let i = 1; i < n; i++) {

        let last = possible[possible.length - 1];
        let next = [];

        last.map(pos => {

            if (!next.includes(pos + a)) {
                next.push(pos + a);
            }

            if (!next.includes(pos + b)) {
                next.push(pos + b);
            }


        })

        console.log(next);

        possible.push(next);
    }

    let last = possible[possible.length - 1];
    last.sort((a, b) => a - b);
    last.join(" ");

    return last;
}
console.log(stones(3, 1, 2))