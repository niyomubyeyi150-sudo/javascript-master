// 1. square(n) — arrow function, implicit return
const square = n => n * n;

console.log("1. Square:");
console.log(square(4));  
console.log(square(5));  
console.log(square(0));  


// 2. isEven(n) — returns a boolean
function isEven(n) {
    return n % 2 === 0;
}

console.log("\n2. Is Even:");
console.log(isEven(4));  
console.log(isEven(7));  
console.log(isEven(0));  


// 3. Celsius to Fahrenheit and Fahrenheit to Celsius
function celsiusToFahrenheit(c) {
    return (c * 9 / 5) + 32;
}

function fahrenheitToCelsius(f) {
    return (f - 32) * 5 / 9;
}

console.log("\n3. Temperature Conversion:");
console.log(celsiusToFahrenheit(0));    
console.log(celsiusToFahrenheit(100));  
console.log(celsiusToFahrenheit(-40));  

console.log(fahrenheitToCelsius(32));   
console.log(fahrenheitToCelsius(212));  
console.log(fahrenheitToCelsius(-40));  


// 4. formatPrice(amount, currency = "RWF")
function formatPrice(amount, currency = "RWF") {
    return amount.toLocaleString("en-US", {
        style: "currency",
        currency: currency
    });
}

console.log("\n4. Format Price:");
console.log(formatPrice(5000));          
console.log(formatPrice(125000));        
console.log(formatPrice(50, "USD"));     


// 5. getGrade(score) — guard clause for invalid input
function getGrade(score) {
    if (typeof score !== "number" ||
        !Number.isFinite(score) ||
        score < 0 || score > 100) {
        return "Invalid score";
    }

    if (score >= 80) {
        return "A";
    } else if (score >= 70) {
        return "B";
    } else if (score >= 60) {
        return "C";
    } else if (score >= 50) {
        return "D";
    } else {
        return "F";
    }
}

console.log("\n5. Get Grade:");
console.log(getGrade(85));   
console.log(getGrade(65));   
console.log(getGrade(101));  


// 6. max(...numbers) — without Math.max
function max(...numbers) {
    if (numbers.length === 0) {
        return undefined;
    }

    let largest = numbers[0];

    for (let number of numbers) {
        if (number > largest) {
            largest = number;
        }
    }

    return largest;
}

console.log("\n6. Maximum Number:");
console.log(max(4, 9, 2));       
console.log(max(10, 25, 15));    
console.log(max());              


// 7. capitalize(word)
function capitalize(word) {
    if (word.length === 0) {
        return "";
    }

    return word[0].toUpperCase() + word.slice(1);
}

console.log("\n7. Capitalize:");
console.log(capitalize("kigali"));  
console.log(capitalize("hello"));   
console.log(capitalize(""));        


// 8. countVowels(text) — case-insensitive
function countVowels(text) {
    let count = 0;

    for (let letter of text.toLowerCase()) {
        if ("aeiou".includes(letter)) {
            count++;
        }
    }

    return count;
}

console.log("\n8. Count Vowels:");
console.log(countVowels("kigali"));  
console.log(countVowels("HELLO"));   
console.log(countVowels("rhythm"));  


// 9. isPalindrome(word)
function isPalindrome(word) {
    let cleaned = word.toLowerCase();
    let reversed = cleaned.split("").reverse().join("");

    return cleaned === reversed;
}

console.log("\n9. Is Palindrome:");
console.log(isPalindrome("racecar"));  
console.log(isPalindrome("hello"));    
console.log(isPalindrome(""));         


// 10. repeatAction(times, callback)
function repeatAction(times, callback) {
    for (let round = 1; round <= times; round++) {
        callback(round);
    }
}

console.log("\n10. Repeat Action:");
repeatAction(3, round => console.log("Round", round));
repeatAction(2, round => console.log("Hello", round));
repeatAction(0, round => console.log(round)); 


// 11. createCounter(start = 0) — closure
function createCounter(start = 0) {
    let value = start;

    return {
        increment: function() {
            value++;
            return value;
        },

        decrement: function() {
            value--;
            return value;
        },

        getValue: function() {
            return value;
        }
    };
}

console.log("\n11. Create Counter:");
let counter1 = createCounter(5);
console.log(counter1.getValue());  
console.log(counter1.increment()); 
console.log(counter1.decrement()); 

let counter2 = createCounter();
console.log(counter2.getValue());  
console.log(counter2.increment()); 
console.log(counter2.getValue());  


// 12. makeDiscount(percent) — returns a function
function makeDiscount(percent) {
    return function(price) {
        return price - (price * percent / 100);
    };
}

console.log("\n12. Make Discount:");
let discount10 = makeDiscount(10);
console.log(discount10(1000));  
console.log(discount10(500));   
console.log(discount10(0));     

let discount20 = makeDiscount(20);
console.log(discount20(1000));  
