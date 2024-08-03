function plaindrome(str){
    let cleanStr=str.replace(/[^a-zA-Z]/g, '').toLowerCase()
    let palindromeStr=cleanStr.split('').reverse().join('')//reverse method for arrays ,split method for string and join mwthod will convert arry to string
  return cleanStr==palindromeStr
}
console.log(plaindrome('cedec'))