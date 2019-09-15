

function combination(arr) {

    let i, j, temp
    let result = []
    let arrLen = arr.length
    let power = Math.pow
    let combinations = power(2, arrLen)

    // Time & Space Complexity O (n * 2^n)

    for (i = 0; i < combinations; i++) {
        temp = ''

        for (j = 0; j < arrLen; j++) {
            // & is bitwise AND
            if ((i & power(2, j))) {
                temp += arr[j]
            }
        }
        result.push(temp)
    }
    return result
}

console.log(combination([1, 2, 3]))  // [ "", "1", "2", "12", "3", "13", "23", "123" ]