//function take string and returns an object with counts of each character in string
    // const userInput=prompt("Enter the string");
    // const charCount=(str)=>{
    //     const result={};
    //     for(let i=0;i<str.length;i++){
    //         let char=str[i].toLowerCase();
    //         if(char!=' '){
    //             if(result[char]>0){
    //                 result[char]++;
    //             }
    //             else{
    //                 result[char]=1;
    //             }

    //         }
    //     }
    //     return result;
    // }
    // console.log(charCount(userInput));

const userInput = prompt('Enter the string');
const charCount = (str) =>{
    const result={};
    for(let char of str){
        if(char.trim()!=' '){
            if(result[char]>0){
                result[char]++;
            }
            else{
                result[char]=1;
            }

        }
    }
    return result;
}
console.log(charCount(userInput));