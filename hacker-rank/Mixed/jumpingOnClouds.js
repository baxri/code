


function jumpingOnClouds(c, k) {

    let position = 0;
    let energy = 100;

    do {

        position = position + k;

        if (position > (c.length - 1)) {
            position = c.length % position;
        }

        console.log(position);

        energy--;

        if (c[position] == 1) {
            energy -= 2;
        }

    } while (position != 0);


    return energy;
}


console.log(jumpingOnClouds([1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0], 3));