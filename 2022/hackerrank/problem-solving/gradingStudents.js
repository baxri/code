function gradingStudents(grades) {

    const newGrades = [];

    for(const grade of grades){

        const toRound = 5 - grade % 5 + grade;
        const diff = toRound - grade

        if( grade < 38 || diff > 2 ){
            newGrades.push(grade);
        }
        else{
            newGrades.push(toRound);
        }
    }

    return newGrades;
}

console.log(gradingStudents([73, 67, 38, 33]));
