

function timeConversion(s) {

    let type = s.slice(s.length - 2);
    let hour = parseInt(s.slice(0, 2));

    if (type == 'PM' && hour < 12) {
        hour = 12 + hour;
    }

    if (type == 'AM' && hour == 12) {
        hour = 0;
    }

    if (hour < 10) {
        hour = "0" + hour;
    }

    let formated = hour + "" + s.slice(2, s.length - 2);
    return formated;
}


console.log(timeConversion("07:05:45PM"));
console.log(timeConversion("11:05:45PM"));
console.log(timeConversion("12:45:54PM"));
console.log(timeConversion("12:40:22AM"));