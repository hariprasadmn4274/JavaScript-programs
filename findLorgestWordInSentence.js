function findLongestWord(sentence){

    let words=sentence.split(' ')//splitting sentence into array of words
    //this split('space') this is different from this split('here no space'):no space converts word into charecter array
    let longestWord=' '

    for(let word of words){

        // Remove non-alphabetic characters means nubers also using regular expression
        let cleanWord=word.replace(/[^a-zA-Z]/g, '')

        if(cleanWord.length>longestWord.length){// length is not not a method , its is property of both arry and astring
            //for arry it give number of elements in arry and for string it give number of charecters
            longestWord=cleanWord;

        }
    }
    return longestWord;

}
let line="hi hari how are you man!!  %^prasad123"
const longWord=findLongestWord(line)
console.log(longWord)