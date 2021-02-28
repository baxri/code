

function fourNumberSum(array, targetSum) {
    array.sort((a, b) => a - b);
    const result = [];

    for( let i = 0; i < array.length; i++ ){
        for( let j = i + 1; j < array.length; j++ ){
            const first = array[i];
            const second = array[j];

            let left = j + 1;
            let right = array.length - 1;

            while( left < right ){
                const sum = first + second + array[left] + array[right];

                if( sum === targetSum ){
                    result.push([first, second, array[left], array[right]]);
                    left++;
                    right--;
                }else if(sum < targetSum){
                    left++;
                }else{
                    right--
                }
            }
        }
    }

    return result;
}


console.log(fourNumberSum([7, 6, 4, -1, 1, 2], 16));