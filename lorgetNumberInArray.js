function lorgestNumber(arr){
    let lorgestNumber=0
    for(let num of arr){
        if(num>lorgestNumber)
            lorgestNumber=num
    }
    return lorgestNumber
}
let array=[1,2,3,4,5,6]
let result=lorgestNumber(array)
console.log(result)