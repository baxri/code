

function validIPAddresses(string){

    const result = [];

    for(let i = 1; i < string.length - 2; i++){

        const a = string.slice(0, i);

        if(!isValidPart(a)) continue;

        for(let j = i+1; j < string.length - 1; j++){
            const b = string.slice(i, j);
            if(!isValidPart(b)) continue;

            for(let x = j+1; x < string.length; x++){
                const c = string.slice(j, x);
                const d = string.slice(x);

                if(!isValidPart(c)) continue;
                if(!isValidPart(d)) continue;

                result.push(`${a}.${b}.${c}.${d}`);
            }
            
        }
    }

    return result;
}

console.log(validIPAddresses('1921680'));

function isValidPart(string){
	const stringAsint = parseInt(string);
	if(string > 255) return false;
	return string.length === stringAsint.toString().length;
}