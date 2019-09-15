

function dayOfProgrammer(year) {

    let day = 13;

    if (year % 4 == 0) {
        day = 12;
    }

    return day + ".09." + year;
}

console.log(dayOfProgrammer("2100"));