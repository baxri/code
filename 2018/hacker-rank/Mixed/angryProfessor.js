

function angryProfessor(k, a) {

    a.sort((a, b) => a - b);

    let students = 0;

    a.map(time => {
        if (time <= 0) {
            students++;
        }
    });

    if (k <= students) {
        return 'NO';
    } else {
        return 'YES';
    }
}


console.log(angryProfessor(3, [-1, -3, 4, 2]));