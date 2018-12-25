

function happyLadybugs(b) {

    let hashmap = {};

    b = [...b];

    if (!b.includes("_")) {
        return "NO";
    }

    [...b].map(char => {
        if (char != "_") {
            if (typeof hashmap[char] === "undefined") {
                hashmap[char] = 1;
            } else {
                hashmap[char]++;
            }
        }
    })

    let result = "YES";

    Object.keys(hashmap).map(key => {
        if (hashmap[key] == 1) {
            result = "NO";
        }
    });

    return result;
}

console.log(happyLadybugs("AABBC"))
console.log(happyLadybugs("AABBC_C"))
console.log(happyLadybugs("DD__FQ_QQF"))
console.log(happyLadybugs("AABCBC"))
console.log(happyLadybugs("_"))


// YYRB_BR