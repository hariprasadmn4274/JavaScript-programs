// 1) charAt(index)
// The charAt() method returns the character at the specified index (position) in a string.
// Index starts from 0. If the index is out of range, an empty string is returned.
let str = "Hello";
console.log(str.charAt(1)); // Output: 'e'

// 2) charCodeAt(index)
// The charCodeAt() method returns the Unicode value (character code) of the character at the specified index.
// It is useful for getting the numerical representation of a character.
console.log(str.charCodeAt(1)); // Output: 101

// 3) concat(string2, string3, ..., stringN)
// The concat() method joins two or more strings and returns a new string.
// It does not change the existing strings.
let str1 = "Hello";
let str2 = "World";
console.log(str1.concat(" ", str2)); // Output: 'Hello World'

// 4) endsWith(searchString, length)
// The endsWith() method determines whether a string ends with the characters of a specified string.
// Optionally, you can specify the length of the string to consider.
console.log(str.endsWith("lo")); // Output: true

// 5) includes(searchString, position)
// The includes() method checks if a string contains the specified substring.
// Optionally, you can specify the position to start the search.
console.log(str.includes("ell")); // Output: true

// 6) indexOf(searchValue, fromIndex)
// The indexOf() method returns the first index at which a given element can be found in the string, or -1 if not present.
// Optionally, you can specify the starting index for the search.
console.log(str.indexOf("e")); // Output: 1

// 7) lastIndexOf(searchValue, fromIndex)
// The lastIndexOf() method returns the last index at which a given element can be found in the string, or -1 if not present.
// Optionally, you can specify the starting index for the search, counting backward.
let str3 = "Hello World";
console.log(str3.lastIndexOf("o")); // Output: 7

// 8) match(regex)
// The match() method retrieves the result of matching a string against a regular expression.
// It returns an array of matches or null if no match is found.
let str4 = "The rain in SPAIN stays mainly in the plain";
console.log(str4.match(/ain/g)); // Output: ['ain', 'ain', 'ain']

// 9) replace(searchValue, newValue)
// The replace() method returns a new string with some or all matches of a pattern replaced by a replacement.
// The pattern can be a string or a regular expression.
let str5 = "Hello World";
console.log(str5.replace("World", "Everyone")); // Output: 'Hello Everyone'

// 10) replaceAll(searchValue, newValue)
// The replaceAll() method returns a new string with all matches of a pattern replaced by a replacement.
// It is similar to replace(), but replaces all occurrences.
let str6 = "Hello World. Welcome to the World.";
console.log(str6.replaceAll("World", "Everyone")); // Output: 'Hello Everyone. Welcome to the Everyone.'

// 11) search(regex)
// The search() method executes a search for a match between a regular expression and the string.
// It returns the index of the match or -1 if no match is found.
console.log(str.search("ell")); // Output: 1

// 12) slice(startIndex, endIndex)
// The slice() method extracts a section of a string and returns it as a new string.
// The extraction is done from the start index up to, but not including, the end index.
console.log(str.slice(1, 4)); // Output: 'ell'

// 13) split(separator, limit)
// The split() method splits a string into an array of substrings using a specified separator.
// Optionally, you can limit the number of splits.
console.log(str.split(" ")); // Output: ['Hello']

// 14) startsWith(searchString, position)
// The startsWith() method checks if a string starts with a specified substring.
// Optionally, you can specify the position to start the search.
console.log(str.startsWith("Hel")); // Output: true

// 15) substring(startIndex, endIndex)
// The substring() method returns a new string containing characters from the start index to, but not including, the end index.
console.log(str.substring(1, 4)); // Output: 'ell'

// 16) toLowerCase()
// The toLowerCase() method returns a new string with all characters converted to lowercase.
let upperStr = "HELLO";
console.log(upperStr.toLowerCase()); // Output: 'hello'

// 17) toUpperCase()
// The toUpperCase() method returns a new string with all characters converted to uppercase.
let lowerStr = "hello";
console.log(lowerStr.toUpperCase()); // Output: 'HELLO'

// 18) trim()
// The trim() method removes whitespace from both ends of a string.
let str7 = "  Hello World  ";
console.log(str7.trim()); // Output: 'Hello World'

// 19) trimStart() / trimLeft()
// The trimStart() method removes whitespace from the beginning of a string.
// trimLeft() is an alias for trimStart().
console.log(str7.trimStart()); // Output: 'Hello World  '

// 20) trimEnd() / trimRight()
// The trimEnd() method removes whitespace from the end of a string.
// trimRight() is an alias for trimEnd().
console.log(str7.trimEnd()); // Output: '  Hello World'

// 21) valueOf()
// The valueOf() method returns the primitive value of a String object. For string literals, it returns the string itself.
console.log(str.valueOf()); // Output: 'Hello'

// 22) padStart(targetLength, padString)
// The padStart() method pads the current string with another string until the resulting string reaches the given length.
// The padding is applied from the start of the string.
let str8 = "5";
console.log(str8.padStart(4, "0")); // Output: '0005'

// 23) padEnd(targetLength, padString)
// The padEnd() method pads the current string with another string until the resulting string reaches the given length.
// The padding is applied from the end of the string.
let str9 = "5";
console.log(str9.padEnd(4, "0")); // Output: '5000'

// 24) localeCompare(compareString)
// The localeCompare() method compares two strings in the current locale. 
// It returns a number indicating whether the string comes before, after, or is the same as the compareString.
let str10 = "a";
let str11 = "b";
console.log(str10.localeCompare(str11)); // Output: -1

// 25) repeat(count)
// The repeat() method returns a new string with a specified number of copies of the string concatenated together.
let str12 = "abc";
console.log(str12.repeat(3)); // Output: 'abcabcabc'
