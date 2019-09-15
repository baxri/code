
function gradingStudents(grades) {

    if (grades < 38) {
        return grades;
    }

    let rem = grades % 5;
    let r = 5 - rem;

    if (r < 3) {
        return grades + r;
    }

    return grades;
}

console.log(gradingStudents(73));
console.log(gradingStudents(67));
console.log(gradingStudents(38));
console.log(gradingStudents(33));