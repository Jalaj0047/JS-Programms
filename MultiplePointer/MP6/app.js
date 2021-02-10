// CODING EXERCISE 3 OF MODULE:6
const areThereDuplicates=(...args)=>{
    let sortedArr=args.sort((a,b)=>{
        if(a>b){
            return 1;
        }else if(a===b){
            return 0;
        }
        else{
            return -1;
        }
    })
    console.log(sortedArr);
    let first=0;
    for(let j=1;j<sortedArr.length;j++){
        if(sortedArr[first]===sortedArr[j]){
            return true;
        }
        else{
            first++;
        }
    }
    return false;
}
console.log(areThereDuplicates("b","c","a","e","a","f"));
console.log(areThereDuplicates(2,4,3,1,4,5,6,3,5,));
 // let next=1;
    // while(next<sortedArr.length){
    //     if(sortedArr[first]===sortedArr[next]){
    //         return true;
    //     }
    //     else{
    //         next++;
    //         first++;
    //     }
    //     return false;
    // }