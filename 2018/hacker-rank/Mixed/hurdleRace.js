

function hurdleRace(k, height) {

    height.sort((a, b) => b - a);

    if (k >= height[0]) {
        return 0;
    }

    return height[0] - k;
}


console.log(hurdleRace(4, [1, 6, 3, 5, 2]));