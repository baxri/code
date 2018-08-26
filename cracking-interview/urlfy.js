

let str = 'Mr John Smith ';


function urlFy(str) {

    let newStr = '';

    for (key in str) {

        if (str[key] == ' ') {
            newStr += '%20';
        } else {
            newStr += str[key];
        }

    }

    return newStr;
}


console.log(urlFy(str));