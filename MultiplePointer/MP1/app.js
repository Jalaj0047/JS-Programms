// NAIVE SOLUTION
const sumZero = (arr) => {
    for(let i=0;i<arr.length;i++){
        for(j=i+1;j<arr.length;j++){
            if(arr[i]+arr[j]===0){
                return [arr[i],arr[j]];
            }
        }
    }
}
console.log(sumZero([-3,-2,-1,0,1,2,3]));
console.log(sumZero([-3,-4,-1,0,5,2,6]));