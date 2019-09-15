

function superReducedString(s) {

    s = [...s];

    for (let i = 0; i < s.length; i++) {

        let prev = s[i - 1];
        let current = s[i];
        let next = s[i + 1];

        if (current == next) {
            s.splice(i, 2);
            i--;
        }else if (current == prev) {
            s.splice(i - 1, 2);
            i--;
        }
    }

    if(s.join('').length == 0){
        return "Empty String"
    }else{
        return s.join('')
    }
}


console.log(superReducedString("aaabccddd"))
console.log(superReducedString("baab"))
console.log(superReducedString("aa"))