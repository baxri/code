

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let tree = [];

function minimalTree(array, tree) {

    let start = 0;
    let end = array.length - 1;

    if (array.length < 1) {
        return null;
    }

    let middle = parseInt((start + end) / 2);

    let left = array.slice(0, middle);
    let right = array.slice(middle + 1);

    console.log(middle);
    console.log(left, );
    console.log(right);

    minimalTree(left, tree);

    console.log(array[middle]);

    minimalTree(right, tree);

    return tree;
}


console.log(minimalTree(array));


