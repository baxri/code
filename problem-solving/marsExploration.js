


function marsExploration(s) {
    let count = 0;
    let exp = "SOS".repeat(s.length / 3);

    [...s].map((char, key) => {
        if (char != exp[key]) count++;
    });

    return count;
}


console.log(marsExploration('SOSSPSSQSSOR'));
console.log(marsExploration('SOSSOT'));
console.log(marsExploration('SOSSOSSOS'));

