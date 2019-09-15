

function staircase(n) {
    let empty = n;
    let str_empty = " ";
    let str_starcase = "#";
    while( empty > 0 ){
        empty--;
        console.log(str_empty.repeat(empty) + "" + (str_starcase.repeat(n-empty)));
    }
}


console.log(staircase(6));