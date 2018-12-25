

function toptalAdd(a, b) {

    a = [...a.toString()];
    b = [...b.toString()];

    let max_length = Math.max(a.length, b.length);

    let dif_a = Math.abs(a.length - max_length);
    let dif_b = Math.abs(b.length - max_length);
    let pre = "";

    if (dif_a > 0) {
        pre = "0".repeat(dif_a);
        a = [...pre, ...a]
    }

    if (dif_b > 0) {
        pre = "0".repeat(dif_b).split("");
        b = [...pre, ...b]
    }

    let save = 0;
    let res = [];

    for (let i = a.length - 1; i >= 0; i--) {

        let x = parseInt(a[i]);
        let y = parseInt(b[i]);

        let sum = [...(x + y + save).toString()];
        save = 0;

        if (sum.length > 1) {
            save = 1;
        }

        let val = sum[sum.length - 1];
        res.unshift(val);
    }

    return parseInt(res.join(""));
}

console.log(toptalAdd(233, 3))