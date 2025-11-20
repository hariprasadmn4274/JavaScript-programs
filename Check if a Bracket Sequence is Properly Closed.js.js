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
