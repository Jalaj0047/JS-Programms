//NAIVE SOLUTION

const same = (str1,str2) =>{
    if(str1.length!==str2.length){
        return false;
    }
    if(str1===str2){
        return true
    }
    for(let char of str1){
        const currentIndex=str2.indexOf(char);
        if(currentIndex===-1){
            return false;
        }
        const str3=str2.slice(str2[currentIndex]);
        console.log(str3);
    }
    return true;
}

console.log(same("qwerty","qwerty"));