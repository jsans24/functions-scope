// ----------- Verbal Questions
// 1. A parameter is a placeholder name you put into a function and an argument is the actual variable you put in when you call the function.
// 2. Using return will effect the code (ex. changing the value of a variable) while console.log only prints to the console for you to see.
// 3. The implications of a functions ability to return a value are that a function becomes a powerful tool to alter code and make things happen.

// ----------- Palindrome Again
function checkPalindrome(a) {
    let caps = a.toUpperCase();
    let split = [...caps];
    let reverse = split.reverse().join('');
    console.log(caps);
    console.log(reverse);
    return caps === reverse;
}
console.log(checkPalindrome("Radar"));
console.log(checkPalindrome("Borscht"));
console.log(checkPalindrome("racecar"));

// ----------- Digit Sum
function sumDigits(num) {
    let split = num.toString().split('');
    let sum = 0;
    for (i = 0; i < split.length; i++) {
        let digit = split[i];
        sum += Number(digit);
    }
    return sum;
}
console.log(sumDigits(42));

// ----------- Pythagoras
function calculateSide(sideA, sideB) {
    return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
}
console.log(calculateSide(8, 6));

// ----------- Sum Array
function sumArray(arr) {
    let split = [...arr]
    let sum = 0;
    for (i = 0; i < split.length; i++) {
        sum += split[i];
    }
    return sum;
}
console.log(sumArray([1, 2, 3, 4, 5, 6]));

// ----------- Prime Numbers
function checkPrime(num) {
    if (num <= 1) return false;
    else if (num === 2) return true;
    else {
        for (i = 2; i < num ; i++) {
            if (num % i === 0) return false;
        }
    }
    return true;
}
console.log(checkPrime(89));
console.log(6 % 3);

function printPrimes(b){
    let list = [''];
    for (j = 0; j <= b; j++) {
        if (checkPrime(j)) {
            list.push(j);
        }
    }
    console.log(list)
}

printPrimes(97)