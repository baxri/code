

function countApplesAndOranges(s, t, a, b, apples, oranges) {

    let apple_fails = 0;
    let orange_fails = 0;

    apples.map(apple => {

        let fail_position = a + apple;

        if (fail_position >= s && fail_position <= t) {
            apple_fails++;
        }

    })

    oranges.map(orange => {

        let fail_position = b + orange;

        if (fail_position >= s && fail_position <= t) {
            orange_fails++;
        }

    })

    console.log(apple_fails);
    console.log(orange_fails);
}


console.log(countApplesAndOranges(
    7, 11, 5, 15, [-2, 2, 1,], [5, -6]
));