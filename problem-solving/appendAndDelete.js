



function appendAndDelete(s, t, k) {

    s = [...s];
    t = [...t];

    let removed = 0;

    while (k > 0) {

        s.pop();

        let index = t.join('').indexOf(s.join(''));

        console.log(index)

        if (index < 0) {
            k = k - 1;
            removed = removed + 1;
        }else{

            if( removed == k ){
                return "Yes"
            }else{
                return "No"
            }
        }
    }

    return "No"
}

console.log(appendAndDelete("abcd", "abcdert", 10))