function arrayIntersection(arr1,arr2){
    let set1=new Set(arr1)
    let set2=new Set(arr2)

    return [...set1].filter(items => set2.has(items))

}
console.log(arrayIntersection([1,2,3,4,5],[3,4,5,6,7,8]))
