


function ArmStrongNumber(n) {

    const numbers = [...n.toString()];

    let result = 0;

    numbers.map(num => {
        result += (num * num * num);
    });

    if (result === n) {
        return true;
    }

    return false;
}

console.log(ArmStrongNumber(371));