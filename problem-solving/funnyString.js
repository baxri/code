

function funnyString(s) {

    let sr = [...s].reverse().join('');

    let s_ascii = ascii(s);
    let sr_ascii = ascii(sr);

    for (let i = 0; i < s.length; i++) {
        let s_diference = Math.abs(s_ascii[i] - s_ascii[i + 1]);
        let sr_diference = Math.abs(sr_ascii[i] - sr_ascii[i + 1]);

        console.log(s_diference)
        console.log(sr_diference)

        if (isNaN(s_diference)) {
            break;
        }

        if (s_diference != sr_diference) {
            return "Not Funny";
        }
    }

    console.log(s_ascii);
    console.log(sr_ascii);

    return "Funny";
}

function ascii(s) {

    let ascii = [];

    [...s].map(char => {
        ascii.push(char.charCodeAt(0));
    });

    return ascii;
}

console.log(funnyString('acxz'));
console.log(funnyString('bcxz'));