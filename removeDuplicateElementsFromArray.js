function removeDuplicates(arr){
    return [...new Set(arr)]// pass that arry into set so set wont take duplicates
    //[...] spread operator used to convert set into new array


    /* // Create a new array from the set
    let uniqueArray = [...new Set(arr)];
    // Return the unique array
    return uniqueArray; */
}
console.log(removeDuplicates([1,2,3,4,5,1,2,3,4,5]))