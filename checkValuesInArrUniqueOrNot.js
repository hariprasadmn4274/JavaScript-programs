function checkValuesInArrUniqueOrNot(arr){
    // let arrl=arr.legnth
    let set=new Set(arr)
    return set.length==arr.length

}
console.log(checkValuesInArrUniqueOrNot([1,2,3,3,4]))