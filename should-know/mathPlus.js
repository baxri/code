


function mathPlus(num1, num2) {

    num1 = num1.toString();
    num2 = num2.toString();

    let maxLength = Math.max(num1.length, num2.length);

    if (num1.length != maxLength) {
        let diff = Math.abs(num1.length - maxLength);
        let zeros = '0'.repeat(diff);
        num1 = zeros + num1;
    }

    if (num2.length != maxLength) {
        let diff = Math.abs(num2.length - maxLength);
        let zeros = '0'.repeat(diff);
        num2 = zeros + num2;
    }

    let carryCount = 0;
    let carry = 0;

    for (let i = num1.length - 1; i >= 0; i--) {

        let top = parseInt(num1[i]);
        let bottom = parseInt(num2[i]);
        let sum = top + bottom + carry;
        carry = 0;

        if (sum > 9) {
            carry = parseInt(sum / 10);
            carryCount++;
        }
    }

    return carryCount;
}



console.log(mathPlus(399, 29));