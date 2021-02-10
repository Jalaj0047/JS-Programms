const findLongestSubString=(str)=>{
    let start=0;
    let seen={};
    let longest=0;
    for(let i=0;i<str.length;i++){
        let char=str[i];
        if(seen[char]){
            // console.log(seen[char]);
            if(start<seen[char]){
                start=seen[char];
                console.log("start",start);
            }
        }
        if(longest<i-start+1){
            longest=i-start+1;
            console.log("long",longest);
        }
        seen[char]=i+1;//Value is set to 1 if not there
        console.log(seen,seen[char]);
    }
    return longest;
}
console.log(findLongestSubString("bbba"));
// console.log(findLongestSubString("rithmschool"));
// console.log("++++++++++++++++++++++++++++++++++++++++++");
// console.log(findLongestSubString("thisisawesome"));
