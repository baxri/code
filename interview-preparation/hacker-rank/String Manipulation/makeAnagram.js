

// My solution
function makeAnagram(a, b) {

    a = [...a];
    b = [...b];

    for (let i = 0; i < a.length; i++) {
        let current = a[i];
        if (b.includes(a[i])) {
            a.splice(a.indexOf(current), 1);
            b.splice(b.indexOf(current), 1);
            i--;
        }
    }

    return a.length + b.length;
}

console.log(makeAnagram("cdec", "abc"))
console.log(makeAnagram("showman", "woman"))

