function checkValuesInArrUniqueOrNot(arr){
    let set=new Set(arr)
    return set.size==arr.length
}
console.log(checkValuesInArrUniqueOrNot([1,2,3,4]))