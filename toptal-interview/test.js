

let a = 65;
let b = 55;


function numberOfCarryOperations(a, b) {

    let a_arr = a.toString();
    let b_arr = b.toString();

    let different = a_arr.length - b_arr.length;

    let arr = new Array();

    for (let i = 0; i < Math.abs(different); i++) {
        arr.push(0);
    }

    if (different > 0) {
        b_arr = new Array(...arr, ...b_arr).join('');
    }

    if (different < 0) {
        a_arr = new Array(...arr, ...a_arr).join('');
    }

    let carryCount = 0;
    let carryNumber = 0;

    for (let i = (a_arr.length) - 1; i >= 0; i--) {

        let a_number = parseInt(a_arr[i]);
        let b_number = parseInt(b_arr[i]);

        let sum = a_number + b_number + carryNumber;

        if (parseInt(sum) > 9) {
            let left_digits = sum.toString().slice(0, -1);
            carryNumber += parseInt(left_digits);
            carryCount++;
        } else {
            carryNumber = 0;
        }
    }

    return carryCount;
}


console.log(numberOfCarryOperations(123, 456)) // 0
console.log(numberOfCarryOperations(555, 555)) // 3
console.log(numberOfCarryOperations(900, 11)) // 0
console.log(numberOfCarryOperations(145, 55)) // 2
console.log(numberOfCarryOperations(0, 0)) // 0
console.log(numberOfCarryOperations(1, 99999)) // 5
console.log(numberOfCarryOperations(999045, 1055)) // 5
console.log(numberOfCarryOperations(101, 809)) // 1
console.log(numberOfCarryOperations(189, 209) )// 1


