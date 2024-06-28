function plaindrome(str){
    let cleanStr=str.replace(/[^a-zA-Z]/g, '').toLowerCase()
    let palindromeStr=cleanStr.split('').reverse().join('')//reverse method for arrays ,split method for string
    if(cleanStr==palindromeStr){
        console.log(`yes this ${cleanStr} is plaindrome `)
    }else{
        console.log(`NO!!! this ${cleanStr} is not plaindrome `)
    }
}
plaindrome('cedec')