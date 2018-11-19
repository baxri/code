
let y = 10;


console.log(y.toString(2));


let a= [1,2,3,4,5,6,7,8,9];


a.splice(2, 1)

console.log(a);









let b = "sdfsdfdfsd";
let c = b.split('')
console.log(c);


console.log(c.join(''));

console.log(b.slice(-1));
console.log(a);



let obj = {
    'a' : 6,
    'b' : 5,
}

keys = Object.keys(obj);

console.log(keys.length);


keys.map((key) => {

    let value = obj[key];
    
    console.log(obj['c']);
    console.log(key);
    console.log(value);

});

let N = 5;


function isPrime(N){

    console.log(N);


    for( let i = 2; i < N; i++ ){
        if( N % i == 0 ){
            return false;
        }
    }

    return true;
}


console.log(isPrime(N));