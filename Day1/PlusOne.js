var plusOne = function(digits) {
    const degitLen = digits.length;
    for(let i=degitLen - 1; i>=0; i--){
        let sum = 0,
            quotient = 0,
            remainder = 0;
        if(i === degitLen - 1){
           sum = digits[i] + 1;
           quotient = Math.floor(sum / 10);
            remainder = sum % 10;
            digits[i] = remainder;
        } else {
          sum = digits[i] + quotient;
           quotient = Math.floor(sum / 10);
            remainder = sum % 10;
            digits[i] = remainder;  
        }
    }
    return digits;
};

// console.log(plusOne([1,2,3]));
console.log(plusOne([9]));