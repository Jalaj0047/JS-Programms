const subSequence=(str1,str2)=>{
    let i=0;
    let j=0;
    if(!str1){
        console.log(`sss ${str1}`);
        return true;
    }
    while(j<str2.length){
        if(str2[j]===str1[i]){
            i++;
        }
        if(i===str1.length){
            console.log(str1.length,i);
            return true;
        }
        j++;
    }
    return false;
}
console.log(subSequence("helo","hello world!"))