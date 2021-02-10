// Section-6 coding exercise:3 //USING FREQUENCY COUNTER
const sameFrequency=(num1,num2)=>{
    const str1=num1.toString();
    const str2=num2.toString();
    let frequencyCounter1={};
    let frequencyCounter2={};
    if(str1.length!==str2.length){
        return false;
    }
    for(let char of str1){
        if(frequencyCounter1[char]>0){
            frequencyCounter1[char]++;
        }else{
            frequencyCounter1[char]=1;
        }
    }
    for(let char of str2){
        if(frequencyCounter2[char]>0){
            frequencyCounter2[char]++;
        }else{
            frequencyCounter2[char]=1;
        }
    }
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
console.log(sameFrequency(28445,24548));
console.log(sameFrequency(324234,245767));