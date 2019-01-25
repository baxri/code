


function rotateRight(str, d) {

    if (d > str.length) {
        d = d % str.length;
    }

    let rotated = [...str];

    for (let i = 0; i < str.length; i++) {

        let newIndex = i + d;

        if (newIndex > str.length - 1) {
            newIndex = newIndex - str.length;
        }

        console.log(newIndex);

        rotated[newIndex] = str[i];
    }


    console.log(str);

    return rotated;

}

function rotateLeft(str, d) {

    if (d > str.length) {
        d = d % str.length;
    }

    let rotated = [...str];

    for (let i = 0; i < str.length; i++) {

        let newIndex = i - d;

        if (newIndex < 0) {
            newIndex = str.length + newIndex;
        }

        console.log(newIndex);

        rotated[newIndex] = str[i];
    }


    console.log(str);

    return rotated;

}


console.log(rotateLeft('rotate', 1));