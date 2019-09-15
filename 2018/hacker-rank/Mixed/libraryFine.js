

function libraryFine(d1, m1, y1, d2, m2, y2) {

    let difYear = y1 - y2;

    if (difYear > 0) {
        return difYear * 10000;
    }

    if (difYear < 0) {
        return 0;
    }

    if (difYear == 0) {

        let difMonth = m1 - m2;

        if (difMonth > 0) {
            return difMonth * 500;
        }

        if (difMonth < 0) {
            return 0;
        }

        if (difMonth == 0) {

            let difDay = d1 - d2;

            if (difDay > 0) {
                return difDay * 15;
            }

            if (difDay < 0) {
                return 0;
            }

        }
    }

    return 0;
}

console.log(libraryFine(9, 6, 2015, 6, 6, 2015));