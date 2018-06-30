// Solution Address
// https://app.codility.com/demo/results/training9YAC3U-83N/

let A = "(()(())())";

function solution(A) {

    if(A.length == 0){
        return 1;
    }

    if(A[0] == ")"){
        return 0;
    }

    let result = 0;

    for(let i = 0; i < A.length; i++){
        if(A[i] == "("){
            result++
        }else{
            result--;
        }

        if(result < 0){
            return 0;
        }
    }

    return result == 0 ? 1 : 0;

}


let result = solution(A);
console.log(result);

