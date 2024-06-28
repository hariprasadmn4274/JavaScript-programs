function removeWhiteSpace(str){
    let cleanStr=str.replace(/\s+/g, '').toLowerCase()
    return cleanStr
}
let String='Hey hari love you man'
let result=removeWhiteSpace(String)
console.log(result)