


function plusMinus(arr) {

    let positive = 0;
    let negative = 0;
    let zero = 0;

    let total = arr.length;

    arr.map(number => {
        if( number > 0 ) positive++;
        if( number == 0 ) zero++;
        if( number < 0 ) negative++;
    });

    console.log((positive/total).toFixed(6));
    console.log((negative/total).toFixed(6));
    console.log((zero/total).toFixed(6));

}

console.log(plusMinus([-4, 3, -9, 0, 4, 1]));