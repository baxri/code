// Solution Address
// https://app.codility.com/demo/results/training549GH6-564/

let A = "{}[]([])";

function solution(A) {

    let workOn = []; // { ( [ 
    let res = [];

    for (let i = 0; i < A.length; i++) {

        let add = ["}", ")", "]"].includes(A[i]) ? oposite(A[i]) : A[i];

        if (!workOn.includes(add)) {
            workOn.push(add);
        }

        let index = workOn.indexOf(A[i]) > -1 ? workOn.indexOf(A[i]) :  workOn.indexOf(oposite(A[i]));;

        if (!res[index]) res[index] = 0;
        let was = res[index];

        if (A[i] == workOn[index]) {
            res[index] = res[index] + 1;
        } else {
            res[index] = res[index] - 1;
        }

        if (res[index] < 0) return 0;

        let f = null;
        for (let j = 0; j < res.length; j++) {
            if (f !== null && res[j] != 0) return 0;
            if (res[j] == 0) f = 0;
        }

        if (was > 0 && res[index] == 0) {
            workOn.splice(index, 1);
            res.splice(index, 1);
        }
    }

    if (res.length > 0) return 0;
    return 1;
}

function oposite(e) {
    if (e == "}") return "{";
    if (e == "{") return "}";
    if (e == "[") return "]";
    if (e == "]") return "[";
    if (e == "(") return ")";
    if (e == ")") return "(";
}

console.log(solution(A));
