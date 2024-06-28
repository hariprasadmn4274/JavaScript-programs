function reverseString(str){
    return str.split('')//split string into array of charecters
    .reverse()//reverse those charecters 
    .join('');//join those charecters into string
}
const originalString='hello world'
const revString=reverseString(originalString);
console.log(revString)