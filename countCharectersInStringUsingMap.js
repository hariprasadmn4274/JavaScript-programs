// function countCharectersInStringUsingMap(str){
//     let charMap=new Map()
//     for(let char of str){
//         if(charMap.has(char)){
//             charMap.set(char,charMap.get(char)+1)
//         }else{
//             charMap.set(char,1)
//         }
//     }
//     return charMap
// }
// console.log(countCharectersInStringUsingMap('aaabbc'))

function jsprogram(str){
    const map=new Map()
    let count=1
   for(let i=0;i<str.length;i++){
       if(str[i]==str[i+1]){
           count++
       }else{
           map.set(str[i],count)
           count=1
       }
   }
   return map
}
console.log(jsprogram("aabbbc"))