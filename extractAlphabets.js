function extractNumbers(str){

    let num=[]
    for(let char of str){
        if(/[a-zA-Z]/.test(char)){// if(/[^a-zA-Z]/.test(char)){ you can use this one also
                                //    /[a-zA-Z]/ is a regular expression that matches any single letter from a to z (lowercase) or A to Z (uppercase).
                                //.test(char) returns true if char matches the pattern (i.e., is a letter), otherwise false.
            num.push(char)
        }
    }
    return num
}
console.log(extractNumbers('hari123prasad456'))
