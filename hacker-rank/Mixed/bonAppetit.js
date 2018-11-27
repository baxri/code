

function bonAppetit(bill, k, b) {

    let annPortion = 0;

    bill.map((item, key) => {
        if (key != k) {
            annPortion += item;
        }
    });

    annPortion = annPortion / 2;

    if (annPortion == b) {
        console.log('Bon Appetit');
    } else {
        console.log(b - annPortion);
    }

}


console.log(bonAppetit([3, 10, 2, 9], 1, 12));