

function appendAndDelete(s, t, k) {

    let used = 0;

    s = s.split('');
    t = t.split('');

    let left = contains(s, t);

    while (left === false) {

        s.pop();
        used++;

        left = contains(s, t);

    }

    console.log(used);
    console.log(left);

    if (left + used > k) {
        return 'No';
    }

    return 'Yes';
}

function contains(s, t) {

    let a = s.join('');
    let b = t.slice(0, s.length).join('');

    console.log(a);
    console.log(b);

    if (a == b) {
        return t.slice(s.length).length;
    }

    return false;
}

console.log(appendAndDelete('aba', 'aba', 10));