function isArmstrongNumber(number) {
    // Convert number to string to iterate through digits
    let numStr = number.toString();
    let len = numStr.length;
    
    // Calculate sum of nth powers of digits
    let sum = 0;
    for (let digit of numStr) {
      sum += Math.pow(parseInt(digit), len);
    }
    
    // Check if sum equals the original number
    return sum === number;
  }
  console.log(isArmstrongNumber(153))