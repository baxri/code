
let A = "UDDDUDUU";

function solution(s) {

    let sealevel = 0;
    let valleyCount = 0;

    for (let i = 0; i < s.length; i++) {

        if (s[i] == 'U') {
            sealevel++;
        }

        if (s[i] == 'D') {
            sealevel--;
        }

        if (sealevel > 0 && s[i] == 'U') {
            valleyCount++
        }

    }

    return valleyCount;
}


console.log(solution(A));