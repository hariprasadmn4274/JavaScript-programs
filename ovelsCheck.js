function ovelsCheck(str){
    let ovels=[]
    let cleanStr=str.replace(/[^a-zA-Z]/g, '').toLowerCase().split('')
    for(let letter of cleanStr){
        if("aeiou".includes(letter)){
            ovels.push(letter)
        }
    }
    return ovels;
}
let result=ovelsCheck("hAri")
console.log(result)