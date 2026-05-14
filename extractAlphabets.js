function extractAlphabets(str){

    let num=[]
    for(let char of str){
        if(/[a-zA-Z]/.test(char)){// if(/[^a-zA-Z]/.test(char)){ you can use this one also,  ^ inside the brackets means "not".
                                //    /[a-zA-Z]/ is a regular expression that matches any single letter from a to z (lowercase) or A to Z (uppercase).
                                //.test(char) returns true if char matches the pattern (i.e., is a letter), otherwise false.
            num.push(char)
        }
    }
    return num
}
console.log(extractAlphabets('hari123prasad456'))


or
function extractAlphabets(str){
    let fnlstr=str.replace(/[a-zA-Z]/g,'');
    return fnlstr;
}
console.log(extractAlphabets('a1b2c4d5e6f7g8h9'))
