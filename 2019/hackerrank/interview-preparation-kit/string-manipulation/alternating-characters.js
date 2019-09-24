function alternatingCharacters(s) {
  let newArray = [];

  let deleteCount = 0;


  s.split("").forEach((char, key) => {

    if(newArray[newArray.length-1] == char){
        deleteCount++
    }else{
        newArray.push(char)
    }

  });

  console.log(newArray)
  console.log(deleteCount)

  return deleteCount
}

console.log(alternatingCharacters("AABAAB"));
