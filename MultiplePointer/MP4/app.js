//USING SLIDING WINDOW APPROACH
const maxSubarraySum = (arr,num) => {
    let maxSum=0;
    let tempSum=0;
    if(num>arr.length){
        return false;
    }
    for(let i=0;i<num;i++){
        maxSum = maxSum+arr[i];
    }
    for(let i=num;i<arr.length;i++){
        tempSum=maxSum-arr[i-num]+arr[i];
        console.log(maxSum,tempSum);
        if(tempSum>maxSum){
            maxSum=tempSum;
        }
    }
    return maxSum;
}

console.log(maxSubarraySum([1,3,4,3,6,7,3,7,9,3,7,5,4,8],4));