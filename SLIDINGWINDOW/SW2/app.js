// const minSubarrayLen=(arr,num)=>{
//     let arr2=[];
//     let sum=0;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>=num){
//             arr2.push(arr[i]);
//             return arr2.length;
//         }
//     }
//     for(let i=0;i<arr.length;i++){
//         arr2.push(arr[i]);
//         sum=sum+arr[i];
//         if(sum>=num){
//             return arr2.length;
//         }
//     }
//     return 0;
// }
// console.log(minSubarrayLen([2,3,1,2,4,3],7));
// WRONG