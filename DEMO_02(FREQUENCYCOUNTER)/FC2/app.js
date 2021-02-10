// Using frequency counter
const same = (arr1,arr2) => {
    if(arr1.length!==arr2.length){
        return false;
    }
    let frequencyCounter1={};
    let frequencyCounter2={};
    for(let val of arr1){
        // frequencyCounter1[val]=(frequencyCounter1[val] || 0)+1;
        if(frequencyCounter1[val]>0){
            frequencyCounter1[val]++;
        }
        else{
            frequencyCounter1[val]=1;
        }
    }
    for(let val of arr2){
        // frequencyCounter2[val]=(frequencyCounter2[val] || 0)+1;
        if(frequencyCounter2[val]>0){
            frequencyCounter2[val]++
        }else{
            frequencyCounter2[val]=1;
        }
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    for(let key in frequencyCounter1){
        if(!(key**2 in frequencyCounter2)){
            return false;
        }
        if(frequencyCounter2[key**2]!==frequencyCounter1[key]){
            return false;
        }
    }
    return true
}

console.log(same([2,4,3,4,5],[16,9,16,4,25]));