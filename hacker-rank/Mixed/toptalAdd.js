

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

        console.log(x);
        console.log(y);
        console.log(sum);

        res.unshift(sum[sum.length - 1]);

        if (sum.length > 0) {
            save = sum.slice(0, sum.length - 1);
            console.log(save);
        }


        console.log(res);

        if (sum.length > 1) {
            save = sum.slice(0, sum.length - 2);
        }
    }

    console.log(b);

}

console.log(toptalAdd(234, 8))