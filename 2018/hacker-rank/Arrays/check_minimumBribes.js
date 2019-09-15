


function minimumBribes(q) {

    let swapCount = 0;

    for (let i = 0; i < q.length; i++) {

        if( q[i] > q[i+1] ){
            swap(q, i, i+1);
            swapCount++;

            if( q[i+1] > q[i+2] ){
                swap(q, i+1, i+2);
                swapCount++;
    
                if( q[i+2] > q[i+3] ){
                    console.log('Too chaotic');
                    return 'Too chaotic';
                }
            }
        }
    }

    console.log(swapCount);
    return swapCount;
}

function swap(q, i, j) {
    let temp = q[i];
    q[i] = q[j];
    q[j] = temp;
}

console.log(minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]));
console.log(minimumBribes([2, 1, 5, 3, 4,]));
console.log(minimumBribes([2, 5, 1, 3, 4]));
console.log(minimumBribes([5, 1, 2, 3, 7, 8, 6, 4]));
console.log(minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]));