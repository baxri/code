

function isAnagram(str1, str2) {

    str1 = [...str1].sort().join('');
    str2 = [...str2].sort().join('');

    if (str1 != str2) {
        return fasle;
    }

    return true;
}

console.log(isAnagram('abba', 'aabb'));