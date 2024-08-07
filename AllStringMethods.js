//replace,includes,slice

// 1) charAt(index)
// The charAt() method returns the character at the specified index (position) in a string.
// Index starts from 0. If the index is out of range, an empty string is returned.
let str = "Hello";
console.log(str.charAt(1)); // Output: 'e'              

// 2) concat(string2, string3, ..., stringN)
// The concat() method joins two or more strings and returns a new string.
// It does not change the existing strings.
let str1 = "Hello";
let str2 = "World";
console.log(str1.concat(" ", str2)); // Output: 'Hello World'




// 4) includes(searchString, position)
// The includes() method checks if a string contains the specified substring.
// Optionally, you can specify the position to start the search.
console.log(str.includes("ell")); // Output: true

// 5) search(regex)
// The search() method executes a search for a match between a regular expression and the string.
// It returns the index of the match or -1 if no match is found.
console.log(str.search("ell")); // Output: 1



// 6) match(regex)
// The match() method retrieves the result of matching a string against a regular expression.
// It returns an array of matches or null if no match is found.
let str4 = "The rain in SPAIN stays mainly in the plain";
console.log(str4.match(/ain/g)); // Output: ['ain', 'ain', 'ain']

// 7) replace(searchValue, newValue)
// The replace() method returns a new string with some or all matches of a pattern replaced by a replacement.
// The pattern can be a string or a regular expression.
let str5 = "Hello World";
console.log(str5.replace("World", "Everyone")); // Output: 'Hello Everyone'

// 8) replaceAll(searchValue, newValue)
// The replaceAll() method returns a new string with all matches of a pattern replaced by a replacement.
// It is similar to replace(), but replaces all occurrences.
let str6 = "Hello World. Welcome to the World.";
console.log(str6.replaceAll("World", "Everyone")); // Output: 'Hello Everyone. Welcome to the Everyone.'



// 9) substring(startIndex, endIndex)
// The substring() method returns a new string containing characters from the start index to, but not including, the end index.
console.log(str.substring(1, 4)); // Output: 'ell'

// 10) slice(startIndex, endIndex)
// The slice() method extracts a section of a string and returns it as a new string.
// The extraction is done from the start index up to, but not including, the end index.
console.log(str.slice(1, 4)); // Output: 'ell'

// 11) split(separator, limit)
// The split() method splits a string into an array of substrings using a specified separator.
// Optionally, you can limit the number of splits.
console.log(str.split(" ")); // Output: ['Hello']



// 12) trim()
// The trim() method removes whitespace from both ends of a string.
let str7 = "  Hello World  ";
console.log(str7.trim()); // Output: 'Hello World'

// 13) trimStart() / trimLeft()
// The trimStart() method removes whitespace from the beginning of a string.
// trimLeft() is an alias for trimStart().
console.log(str7.trimStart()); // Output: 'Hello World  '

// 14) trimEnd() / trimRight()
// The trimEnd() method removes whitespace from the end of a string.
// trimRight() is an alias for trimEnd().
console.log(str7.trimEnd()); // Output: '  Hello World'



// 15) startsWith(searchString, position)
// The startsWith() method checks if a string starts with a specified substring.
// Optionally, you can specify the position to start the search.
console.log(str.startsWith("Hel")); // Output: true

// 16) endsWith(searchString, length)
// The endsWith() method determines whether a string ends with the characters of a specified string.
// Optionally, you can specify the length of the string to consider.
console.log(str.endsWith("lo")); // Output: true



// 16) toLowerCase()
// The toLowerCase() method returns a new string with all characters converted to lowercase.
let upperStr = "HELLO";
console.log(upperStr.toLowerCase()); // Output: 'hello'

// 17) toUpperCase()
// The toUpperCase() method returns a new string with all characters converted to uppercase.
let lowerStr = "hello";
console.log(lowerStr.toUpperCase()); // Output: 'HELLO'

