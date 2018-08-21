

let hashmap = {};

hashmap.dog = 'dog';
hashmap.cat = 'cat';
hashmap.elephant = 'elephant';


console.log(hashmap);

delete hashmap.dog;


console.log(hashmap);


if (typeof hashmap.gg === "undefined") {
    console.log("OK");
} else {
    console.log("LL");
}