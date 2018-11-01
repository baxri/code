
const A = [3, 8, 9, 7, 6];
const K = 1;

function solution(A, K) {

    let newArray = new Array(...A);

    console.log(newArray);

    for (let i = 0; i < A.length; i++) {

        let newIndex = i + K;

        if( typeof A[newIndex] ){
            newIndex = newIndex - A.length;
        }
        

        
        console.log(A[nexIndex]);

        newArray[nexIndex] = A[i];
    }

}






console.log(solution(A, K));