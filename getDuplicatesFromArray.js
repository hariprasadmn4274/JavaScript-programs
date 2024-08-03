function getDuplicatesFromArray(arr){
    let seen=new Set()
    let duplicates=[]
    for(let digi of arr){
        if(seen.has(digi)){
            duplicates.push(digi)
        }else{
            seen.add(digi)
        }
    }
    return duplicates
}
console.log(getDuplicatesFromArray([1,2,2,3,4,4,5,6]))