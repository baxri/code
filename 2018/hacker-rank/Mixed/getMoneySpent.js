


function getMoneySpent(keyboards, drives, b) {

    let max = -1;

    keyboards.map((keyboard, i) => {
        drives.map((drive, j) => {

            if( keyboard + drive > max && keyboard + drive <= b ){
                max = keyboard + drive;
            }

        });
    });

    return max;
}

console.log(getMoneySpent([3, 1], [5, 2, 8], 10));
console.log(getMoneySpent([4], [5], 5));

