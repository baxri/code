


function caesarCipher(s, k) {
    
    let original_array = "abcdefghijklmnopqrstuvwxyz";
    let rotated_array = rotateRight(original_array, k);

    let convert_hash_map = {};

    [...original_array].map((val, key) => {
        convert_hash_map[val] = rotated_array[key];
    });


    let encrypted = [...s];

    [...s].map((val, key) => {
        if( val.match(/[A-Za-z]/g)  ){

            let lower = val.toLowerCase();

            if(lower == val){
                encrypted[key] = convert_hash_map[lower]
            }else{
                encrypted[key] = convert_hash_map[lower].toUpperCase();
            }

            
        }
    });


    return encrypted.join('')
}

function rotateRight( alphabet, k ){

    if(k > alphabet.length){
        k = k%alphabet.length;
    }

    let rotated = [...alphabet];

    for( let i = 0; i < alphabet.length; i++ ){

        let newIndex = i + k;

        if( newIndex > alphabet.length - 1 ){
            newIndex = newIndex - alphabet.length;
        }

        rotated[i] = alphabet[newIndex];
    }

    return rotated;
}


console.log(caesarCipher("middle-Outz", 50))