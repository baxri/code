

function flatlandSpaceStations(n, c) {

    let maxDistance = null;
    n--;

    while (n >= 0) {

        let min = null;

        c.map(station => {

            let distance = Math.abs(station - n);

            if (min === null || min > distance) {
                min = distance;
            }
        });

        if (maxDistance === null || maxDistance < min) {
            maxDistance = min;
        }
        n--;
    }

    return maxDistance;
}

console.log(flatlandSpaceStations(5, [0, 4]))
console.log(flatlandSpaceStations(6, [0, 1, 2, 4, 3, 5]))