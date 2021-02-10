const anagram = (str1,str2) => {
    if(str1.length!==str2.length){
        return false;
    }
    let frequencyCounter1={};
    let frequencyCounter2={};
    for(let char of str1){
        // if(frequencyCounter1[char]>0){
        //     frequencyCounter1[char]++;
        // }
        // else{
        //     frequencyCounter1[char]=1;
        // }
        frequencyCounter1[char] ? frequencyCounter1[char]++ : frequencyCounter1[char]=1;
    }
    for(let char of str2){
        if(frequencyCounter2[char]>0){
            frequencyCounter2[char]++;
        }
        else{
            frequencyCounter2[char]=1;
        }
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    for(let key in frequencyCounter1){
        if(!(key in frequencyCounter2)){
            return false;
        }
        if(frequencyCounter1[key]!==frequencyCounter2[key]){
            return false;
        }
    }
    return true;
}

console.log(anagram("qwerty","yewrtq"));
console.log(anagram(" "," "));
console.log(anagram("sharma","amashr"));
// console.log(anagram())