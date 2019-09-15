

function pickingNumbers(a) {

    a.sort((a, b) => a - b);

    let array = [];
    let max = 0;

    a.map((current, i) => {

        let arr = [];

        arr.push(current);

        for (let j = i + 1; j < a.length; j++) {
            if (Math.abs(current - a[j]) <= 1) {
                arr.push(a[j]);
            }
        }

        if (arr.length > max) {
            max = arr.length;
            array = arr;;
        }

    });

    console.log(array);
    return max;
}

console.log(pickingNumbers([4, 6, 5, 3, 3, 1]));