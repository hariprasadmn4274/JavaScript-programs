function countCharectersInString(str){
    let count=1
    let finalStr=''
    for(let i=0;i<str.length;i++){
        if(str[i]===str[i+1]){
            count++
        }else{
            finalStr+=str[i]+count
            count=1
        }
    }
    return finalStr
}
console.log(countCharectersInString('aaabbc'))