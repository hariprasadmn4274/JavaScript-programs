function removeWhiteSpace(str){
    let cleanStr=str.replace(/\s+/g, '').toLowerCase()//  \S this is to remove one space, \s+  is to remove multiple spaces
    return cleanStr
}

console.log(removeWhiteSpace('Hey hari love you man'))