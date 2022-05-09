/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    
    let mapping = {
        'I':1,
        'V':5,
        'X':10,
        'L':50,
        'C':100,
        'D':500,
        'M':1000
    }
    
    let rev = 0;
    
    currentChar ='';
    nextChar= '';
    currentValue = 0;
    nextValue = 0;
    
    let i = 0;
    
    while (i < s.length) {
        currentChar = s.charAt(i);
        currentValue = mapping[currentChar];
        
        if (i < s.length -1) {
            nextChar = s.charAt(i +1);
            nextValue = mapping[nextChar];
            if (currentValue < nextValue) {
                currentValue = nextValue - currentValue;
                i++;
            }
        }
        
        rev += currentValue;
        i++;
    }
    
    return rev;
};

console.log(romanToInt('III'));
console.log(romanToInt('LVIII'));
console.log(romanToInt('MCMXCIV'));
