function reverseStr(str) {
    let chars = str.split('')
    let left = 0;
    let right = chars.length - 1;

    while (left < right) {
        if (!/[a-zA-Z]/.test(chars[left])) {
            left++;
        } else if (!/[a-zA-Z]/.test(chars[right])) {
            right--;
        } else {
            [chars[left], chars[right]] = [chars[right], chars[left]];
            left++;
            right--;
        }
    }
    return chars.join('');
}

console.log(reverseStr("ha$ri")); 
