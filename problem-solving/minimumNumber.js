



function minimumNumber(n, password) {

    let minAdd = 0;

    if( password.length < 6 ){
        minAdd = 6 - password.length;
    }
    
    let missedCharacters = 0;

    let numbers = "0123456789"
    let lower_case = "abcdefghijklmnopqrstuvwxyz"
    let upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let special_characters = "!@#$%^&*()-+"

    password = [...password]

    let hasNumber = 0;
    password.map(char => {
        if([...numbers].includes(char)){
            hasNumber = 1;
        }
    })
    if( !hasNumber ) missedCharacters++;

    let hasLowerCase = 0;
    password.map(char => {
        if([...lower_case].includes(char)){
            hasLowerCase = 1;
        }
    })
    if( !hasLowerCase ) missedCharacters++;


    let hasUpperCase = 0;
    password.map(char => {
        if([...upper_case].includes(char)){
            hasUpperCase = 1;
        }
    })
    if( !hasUpperCase ) missedCharacters++;

    let hasSpecialCharacters = 0;
    password.map(char => {
        if([...special_characters].includes(char)){
            hasSpecialCharacters = 1;
        }
    })
    if( !hasSpecialCharacters ) missedCharacters++;

    return Math.max(missedCharacters, minAdd)
}

console.log(minimumNumber(3, "Ab1"))