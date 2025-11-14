function arrayIntersection(arr1,arr2){
    let set1=new Set(arr1) //creating new object from arr1 , so that object will remove all duplicates and store only uniqe numbers
    let set2=new Set(arr2)

    return [...set1].filter(items => set2.has(items))//[...set1] is JavaScript syntax that uses the spread operator to convert a Set object (set1) into an array.

}
console.log(arrayIntersection([1,2,3,4,5],[3,4,5,6,7,8]))
