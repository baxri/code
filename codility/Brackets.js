// Solution Address
// https://app.codility.com/demo/results/training9YAC3U-83N/

// let A = "{[()()][(]}";
// let A = "[(){}]";
let A = "[()}";
function solution(A) {

    let result = 0;

    let first = 0;
    let second = 0;
    let third = 0;

    let queue = [];

    if (["}", "]", ")"].includes(A[0])) {
        return 0;
    }

    for (let i = 0; i < A.length; i++) {

        if (!queue.includes(A[i]) && !["}", "]", ")"].includes(A[i])) {
            queue.push(A[i]);

            if (A[i] == "{" && (A[i + 1] == ")" || A[i + 1] == "]")) return 0;
            if (A[i] == "[" && (A[i + 1] == "}" || A[i + 1] == ")")) return 0;
            if (A[i] == "(" && (A[i + 1] == "}" || A[i + 1] == "]")) return 0;
        }

        let firstWAs = first;
        let secondWAs = second;
        let thirdWAs = third;

        if (A[i] == same(queue[0])) first++;
        if (A[i] == oposite(queue[0])) first--;

        if (A[i] == same(queue[1])) second++;
        if (A[i] == oposite(queue[1])) second--;

        if (A[i] == same(queue[2])) third++;
        if (A[i] == oposite(queue[2])) third--;

        if (secondWAs > 0 && second == 0) {
            queue.splice(-1, 1);
        }
        if (thirdWAs > 0 && third == 0) {
            queue.splice(-1, 1);
        }
        if (firstWAs > 0 && first == 0) {
            queue.splice(-1, 1);
        }

        if (first == 0 && (second != 0 || third != 0)) return 0;
        if (second == 0 && third != 0) {
            return 0;
        }

        if (first < 0) return 0;
        if (second < 0) return 0;
        if (third < 0) return 0;
    }

    // if (queue.length < 3) return 0;

    return 1;

}

function oposite(e) {
    if (e == "{") return "}";
    if (e == "}") return "{";
    if (e == "[") return "]";
    if (e == "]") return "[";
    if (e == "(") return ")";
    if (e == ")") return "(";
    return 0;
}

function same(e) {
    if (e == "{") return "{";
    if (e == "}") return "}";
    if (e == "[") return "[";
    if (e == "]") return "]";
    if (e == "(") return "(";
    if (e == ")") return ")";
    return 0;
}


let result = solution(A);
console.log(result);

