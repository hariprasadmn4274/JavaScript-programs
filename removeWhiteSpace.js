function removeWhiteSpace(str){
    let cleanStr=str.replace(/\s+/g, '').toLowerCase()//  \S this is to remove one space, \s+  is to remove multiple spaces
    return cleanStr
}
let String='Hey hari love you man'
let result=removeWhiteSpace(String)
console.log(result)