function reverseStringwithoutReverseMethod(str){
    let cleanStr=str.replace(/[^a-zA-Z]/g, '').split('');
        let reverseString='';
    for(let i=cleanStr.length-1;i>=0;i--){// .length is array function gives number of elements it has. ex: hari has 4 elements
        reverseString=reverseString+cleanStr[i]
    }
    return reverseString;
}
let result=reverseStringwithoutReverseMethod("hari");
console.log(result)