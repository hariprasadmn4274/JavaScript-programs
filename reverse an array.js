// function reverseArry(arr){
//     let arrStr=arr.join('')
//     let finalarr=''
//     for(let i=arrStr.length-1;i>=0;i--){
//         finalarr+=arrStr[i]
//     }
//     return finalarr.split('')
// }
// console.log(reverseArry([1,2,3,4,5]))

// function reverseArry(arr){
//     let left=0
//     let right= arr.length-1

//    while(left<right){
//    [arr[left],arr[right]]=[arr[right],arr[left]]
//    left++
//    right--
//    }
//    return arr
// }
// console.log(reverseArry([1,2,3,4,5]))


function reverseArry(arr){
    
   return arr.reverse()
}
console.log(reverseArry([1,2,3,4,5]))