


function kangaroo(x1, v1, x2, v2) {

    while (x1 != x2) {

        if (x2 > x1 && v2 >= v1) {
            return 'NO';
        }

        if (x1 > x2 && v1 >= v2) {
            return 'NO';
        }

        x1 = x1 + v1;
        x2 = x2 + v2;
    }

    return "YES";
}


console.log(kangaroo(0, 3, 4, 2));