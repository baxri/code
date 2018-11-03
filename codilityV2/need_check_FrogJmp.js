// Solution Address
// 

let X = 10;
let Y = 85;
let D = 50;


function solution(X, Y, D) {

    if (X == Y) {
        return 0;
    }

    let myWay = Y - X;

    let leftDistance = myWay % D;
    let jumps = parseInt(myWay / D);

    if (leftDistance > 0) {
        return ++jumps;
    } else {
        return jumps;
    }
}

console.log(solution(X, Y, D));

