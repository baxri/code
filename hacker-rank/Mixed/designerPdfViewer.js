

function designerPdfViewer(h, word) {

    let letters = {};
    let width = word.length;
    let height = null;

    'abcdefghijklmnopqrstuvwxyz'.split('').map((letter, i) => {
        letters[letter] = i;
    });

    word.split('').map((letter, i) => {
        if (height === null || h[letters[letter]] > height) {
            height = h[letters[letter]];
        }
    })

    return width * height;
}

console.log(designerPdfViewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 'abc'));
console.log(designerPdfViewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7], 'zaba'));