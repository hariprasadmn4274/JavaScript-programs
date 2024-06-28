function ovelCheck(str){
    let cleanStr=str.replace(/[^a-zA-Z]/g, '').toLowerCase().split('')
    let count=0

    for(let letter of cleanStr){

        // switch(letter){
        //     case "a": 
        //     case "e": 
        //     case "i": 
        //     case "o": 
        //     case "u": 
        //     count++
        //     break;
        // }

        if('aeiou'.includes(letter)){
            count++
        }
    }
    return count;

}
let result=ovelCheck("hAri")
console.log(result)