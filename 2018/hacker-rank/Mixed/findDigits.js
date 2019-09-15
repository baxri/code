


function findDigits(n) {

    let digits = n.toString().split('');
    let count = 0;

    digits.map(d => {
        if( d != 0 && n%d == 0 ){
            count++;
        }
    });
    
    return count;
}


console.log(findDigits(1012));