

function breakingRecords(scores) {

    let min = null;
    let max = null;

    let max_break = 0;
    let min_break = 0;

    scores.map(score => {

        if (score > max || max == null) {

            if (max != null) {
                max_break++;
            }

            max = score;
        }

        if (score < min || min == null) {

            if (min != null) {
                min_break++;
            }

            min = score;
        }


    })

    return [max_break, min_break];
}

console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]));