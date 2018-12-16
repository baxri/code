

function cavityMap(grid) {

    grid = grid.map(row => [...row]);

    for (let i = 0; i < grid.length; i++) {

        if (i == 0 || i == grid.length - 1) {
            continue;
        }

        for (let j = 0; j < grid.length; j++) {
            if (j == 0 || j == grid.length - 1) {
                continue;
            }

            let current = grid[i][j];

            let top = grid[i - 1][j];
            let bottom = grid[i + 1][j];
            let left = grid[i][j - 1];
            let right = grid[i][j + 1];

            if (current > top && current > bottom && current > left && current > right) {
                grid[i][j] = 'X';
            }
        }
    }

    grid = grid.map(row => row.join(''));
    return grid;
}

console.log(cavityMap(['1112', '1912', '1892', '1234']))