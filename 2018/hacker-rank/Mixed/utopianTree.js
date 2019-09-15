


function utopianTree(n) {

    let cycle = 0;
    let height = 1;
    let operation = 'double';

    while (cycle < n) {

        if (operation == 'double') {
            height *= 2;
            operation = 'byone';
        } else {
            height += 1;
            operation = 'double';
        }

        cycle++;
    }

    return height;
}


console.log(utopianTree(0));
console.log(utopianTree(1));
console.log(utopianTree(4));