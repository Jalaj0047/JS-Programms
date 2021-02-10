//CODING EXCERCISE:4
const areThereDuplicates=(...args)=>{
    console.log(args);
    const frequencyCounter1={};
    for(let elements of args){
        frequencyCounter1[elements] ? frequencyCounter1[elements]++ : frequencyCounter1[elements]=1;
    }
    console.log(frequencyCounter1);
    for(let key in frequencyCounter1){
        if(frequencyCounter1[key]>1){
            return true;
        }
        else{
            return false;
        }
    }
}
console.log(areThereDuplicates('a','b','c','d','a'));