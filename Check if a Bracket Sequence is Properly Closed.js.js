function isValidBracketSequence(str) {

    let arr = [];

    for (let char of str) {
        if (char === '(') {
            arr.push(char);
        } else if (char === ')') {
            if (arr.length === 0) {
                return false;
            }
            arr.pop();
        }
    }
    return arr.length === 0;
}

console.log(isValidBracketSequence("(())()")); // true


or

function isValidBracketSequence(str){
let count=0
    for(let br of str){
        if(br ==='{'){
            count++;
        }
        else if(br=='}'){
            if(count==0){
                return false;
            }else{
                count--;
            }
        }
    }
    return count==0;
}
console.log(isValidBracketSequence("{}")); // true
