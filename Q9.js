/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }
    let str = x.toString();
    
    let middleValue = str.length / 2;
    
    for (let i = 0; i < middleValue; i++) {
        if (str.charAt(i) !== str.charAt(str.length - i -1)) {
            return false;
        }
    }
    
    return true;
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));