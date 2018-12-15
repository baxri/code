

function workbook(n, k, arr) {

    let gold = 0;
    let spred = [];
    let index = 0;

    arr.map(val => {

        let articles = val;

        let i = 1;

        while (articles > 0) {

            if (typeof spred[index] == 'undefined') {
                spred[index] = [];
            }

            spred[index].push(i);

            if (spred[index].length == k) {
                index++;
            }

            articles--;
            i++;
        }

        if (val % k != 0) {
            index++;
        }
    });

    spred.map((articles, page) => {
        if (articles.includes(++page)) {
            gold++;
        }
    });

    return gold;
}

console.log(workbook(5, 3, [4, 2, 6, 1, 10]))