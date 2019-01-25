


function arrayManipulation(n, queries) {

    let array = [...'0'.repeat(n)]
    let max = null;

    queries.map(query => {

        array.map((elem, index) => {

            elem = parseInt(elem);
            position = index + 1;

            if (position >= query[0] && position <= query[1]) {
                elem += query[2];
                array[index] = elem;

                if (max === null || max < elem) {
                    max = elem;
                }
            }
        })
    });
    return max;
}

const queries = [[1, 2, 100], [2, 5, 100], [3, 4, 100]];
const n = 5;


console.log(arrayManipulation(n, queries))