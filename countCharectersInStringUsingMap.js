function countCharectersInStringUsingMap(str){
    let charMap=new Map()
    for(let char of str){
        if(charMap.has(char)){
            charMap.set(char,charMap.get(char)+1)
        }else{
            charMap.set(char,1)
        }
    }
    return charMap
}
console.log(countCharectersInStringUsingMap('aaabbc'))