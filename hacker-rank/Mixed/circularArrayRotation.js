

function circularArrayRotation(a, k, queries) {

    let rotated = [...a];

    a.map((current, i) => {

        let next = i + k;

        if (next > a.length - 1) {
            next = next % a.length;
        }

        rotated[next] = current;
    });

    let r = [];

    queries.map((item, key) => {
        r.push(rotated[key]);
    })

    return r;
}

console.log(circularArrayRotation([1, 2, 3], 2, [0, 1, 2]));