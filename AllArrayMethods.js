// 1) concat(array2, array3, ..., arrayN)
// The concat() method is used to merge two or more arrays. 
// This method does not change the existing arrays, but instead returns a new array.
let arr1 = [1, 2];
let arr2 = [3, 4];
console.log(arr1.concat(arr2)); // Output: [1, 2, 3, 4]

// 2) every(callback)
// The every() method tests whether all elements in the array pass the test implemented by the provided function.
// It returns a Boolean value.
let arr3 = [1, 2, 3, 4];
console.log(arr3.every(num => num < 5)); // Output: true

// 3) fill(value, start, end)
// The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). 
// It returns the modified array.
let arr4 = [1, 2, 3, 4];
console.log(arr4.fill(0, 1, 3)); // Output: [1, 0, 0, 4]

// 4) filter(callback)
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.
let arr5 = [1, 2, 3, 4];
console.log(arr5.filter(num => num > 2)); // Output: [3, 4]

// 5) find(callback)
// The find() method returns the value of the first element in the array that satisfies the provided testing function. 
// Otherwise, it returns undefined.
console.log(arr5.find(num => num > 2)); // Output: 3

// 6) findIndex(callback)
// The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. 
// Otherwise, it returns -1.
console.log(arr5.findIndex(num => num > 2)); // Output: 2

// 7) forEach(callback)
// The forEach() method executes a provided function once for each array element. 
// It does not return anything (undefined).
arr5.forEach(num => console.log(num)); // Output: 1 2 3 4

// 8) includes(value)
// The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
console.log(arr5.includes(2)); // Output: true

// 9) indexOf(value)
// The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
console.log(arr5.indexOf(2)); // Output: 1

// 10) join(separator)
// The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), 
// separated by commas or a specified separator string.
console.log(arr5.join('-')); // Output: '1-2-3-4'

// 11) lastIndexOf(value)
// The lastIndexOf() method returns the last index at which a given element can be found in the array, 
// or -1 if it is not present. The array is searched backwards, starting at fromIndex.
let arr6 = [1, 2, 3, 2, 1];
console.log(arr6.lastIndexOf(2)); // Output: 3

// 12) map(callback)
// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
console.log(arr5.map(num => num * 2)); // Output: [2, 4, 6, 8]

// 13) pop()
// The pop() method removes the last element from an array and returns that element. This method changes the length of the array.
let arr7 = [1, 2, 3, 4];
console.log(arr7.pop()); // Output: 4
console.log(arr7); // Output: [1, 2, 3]

// 14) push(element1, ..., elementN)
// The push() method adds one or more elements to the end of an array and returns the new length of the array.
console.log(arr7.push(4)); // Output: 4 (new length of array)
console.log(arr7); // Output: [1, 2, 3, 4]

// 15) reduce(callback, initialValue)
// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
let arr8 = [1, 2, 3, 4];
console.log(arr8.reduce((acc, num) => acc + num, 0)); // Output: 10

// 16) reduceRight(callback, initialValue)
// The reduceRight() method applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.
console.log(arr8.reduceRight((acc, num) => acc + num, 0)); // Output: 10

// 17) reverse()
// The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
let arr9 = [1, 2, 3, 4];
console.log(arr9.reverse()); // Output: [4, 3, 2, 1]

// 18) shift()
// The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
let arr10 = [1, 2, 3, 4];
console.log(arr10.shift()); // Output: 1
console.log(arr10); // Output: [2, 3, 4]

// 19) slice(start, end)
// The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) 
// where start and end represent the index of items in that array. The original array will not be modified.
let arr11 = [1, 2, 3, 4];
console.log(arr11.slice(1, 3)); // Output: [2, 3]

// 20) some(callback)
// The some() method tests whether at least one element in the array passes the test implemented by the provided function. 
// It returns a Boolean value.
console.log(arr11.some(num => num > 3)); // Output: true

// 21) sort([compareFunction])
// The sort() method sorts the elements of an array in place and returns the sorted array. 
// The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
let arr12 = [3, 1, 4, 2];
console.log(arr12.sort()); // Output: [1, 2, 3, 4]

// 22) splice(start, deleteCount, item1, item2, ...)
// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
let arr13 = [1, 2, 3, 4];
arr13.splice(1, 2, 'a', 'b'); 
console.log(arr13); // Output: [1, 'a', 'b', 4]

// 23) toString()
// The toString() method returns a string representing the specified array and its elements.
let arr14 = [1, 2, 3, 4];
console.log(arr14.toString()); // Output: '1,2,3,4'

// 24) unshift(element1, ..., elementN)
// The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
let arr15 = [2, 3, 4];
console.log(arr15.unshift(1)); // Output: 4 (new length of array)
console.log(arr15); // Output: [1, 2, 3, 4]

// 25) flat(depth)
// The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
let arr16 = [1, [2, [3, [4]]]];
console.log(arr16.flat(2)); // Output: [1, 2, 3, [4]]

// 26) flatMap(callback)
// The flatMap() method first maps each element using a mapping function, then flattens the result into a new array. 
// It is identical to a map followed by a flat of depth 1.
let arr17 = [1, 2, 3, 4];
console.log(arr17.flatMap(num => [num, num * 2])); // Output: [1, 2, 2, 4, 3, 6, 4, 8]
