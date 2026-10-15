//1.Even or odd for a number, print &quot;even&quot; or &quot;odd&quot;.
// Pseudocode:
// 1. Start
// 2. Create a number.
// 3. Check if the number divided by 2 has a remainder of 0.
// 4. If yes, print "Even".
// 5. Otherwise, print "Odd".
// 6. End

let number = 3;
if(number % 2 === 0){
    console.log("Even number");
}else{
    console.log("Odd number");
}

// 2.Grade calculator score 0–100 → A (80+), B (70–79), C (60–69), D (50–59), F. Reject values outside 0–100 with a guard clause.
// Pseudocode:
// 1. Start
// 2. Get the student's score.
// 3. If the score is less than 0 or greater than 100, print "Invalid score" and stop.
// 4. If the score is 80 or above, print "A".
// 5. Otherwise, if the score is 70 or above, print "B".
// 6. Otherwise, if the score is 60 or above, print "C".
// 7. Otherwise, if the score is 50 or above, print "D".
// 8. Otherwise, print "F".
// 9. End
let score = 50;
if(score < 0 || score > 100){
    console.log("Invalid score");
}
else if (score >= 80){
    console.log("A");
}else if( score >= 70 ){
    console.log("B");
}else if (score >= 60){
    console.log("C");
}else if (score >= 50){
    console.log("D");
}else {
    console.log("f");
}
//3.Ticket price children under 12: 2,000 RWF; students (flag isStudent): 3,000; adults: 5,000; everyone over 65: free.
// Pseudocode:
// 1. Start
// 2. Get the person's age and student status.
// 3. If the person is over 65, the ticket is free.
// 4. Otherwise, if the person is under 12, the price is 2,000 RWF.
// 5. Otherwise, if the person is a student, the price is 3,000 RWF.
// 6. Otherwise, the price is 5,000 RWF.
// 7. Print the ticket price.
// 8. End

let age=15;
let isStudent=false;
if(age > 65){
    console.log("Ticket is free");
}else if (age < 12){
    console.log("price = 2000 RWF");
}else if (isStudent === true){
    console.log(" Ticket Price = 3000");
}else{
    console.log("Price=5000");
}

//4.Day planner use switch on a day name to print what happens in class that day (Mon–Fri) and &quot;No class&quot; on weekends.
// Pseudocode:
// 1. Start
// 2. Get the day name.
// 3. Use a switch statement to check the day.
// 4. If Monday, print Monday's class activity.
// 5. If Tuesday, print Tuesday's class activity.
// 6. If Wednesday, print Wednesday's class activity.
// 7. If Thursday, print Thursday's class activity.
// 8. If Friday, print Friday's class activity.
// 9. If Saturday or Sunday, print "No class".
// 10. If the day is not recognized, print "Invalid day".
// 11. End

let day = "Sunday";
switch (day){
       case "Monday" :
        console.log ("Introduction to Dom");
        break;

        case "Tuesday" :
        console.log ("Array and Array method");
        break;

        case "Wednesday" :
        console.log ("CRUD Operation");
        break;

        case "Thursday" :
        console.log ("Individual capston project");
        break;

        case "Friday" :
        console.log ("Workshop project ");
        break;
        default:
            console.log("It is a weekend no study");
}

// 5. Countdown print 10 to 1, then "Liftoff!";.
// Pseudocode:
// 1. Start
// 2. Set the counter to 10.
// 3. While the counter is greater than or equal to 1:
//    a. Print the counter.
//    b. Decrease the counter by 1.
// 4. Print "Liftoff!".
// 5. End

let counter = 10;
while (counter >= 1){
    console.log(counter);
    --counter;
}
console.log("Liftoff");


//6. Sum and average using for…of, compute the sum and average of [45, 78, 90, 62, 88].
// Pseudocode:
// 1. Start
// 2. Create an array containing 45, 78, 90, 62, 88.
// 3. Set the sum to 0.
// 4. Use a for...of loop to visit each number.
// 5. Add each number to the sum.
// 6. Calculate the average by dividing the sum by the number of elements.
// 7. Print the sum and average.
// 8. End

let compute = [45, 78, 90, 62, 88];
let sum = 0;

for (let number of compute) {
    sum = sum + number;
}

let average = sum / compute.length;

console.log("Sum =", sum);
console.log("Average =", average);

//7.7. Find the first, find the first number greater than 100 in an array and stop looping (break).
// Pseudocode:
// 1. Start
// 2. Create an array of numbers.
// 3. Loop through each number in the array.
// 4. If a number is greater than 100:
//    a. Print the number.
//    b. Stop the loop using break.
// 5. End

let arr=[12,34,123,34,56];
for( let i=0;i < 5 ;i++){
    if(arr[i] > 100){
     console.log(arr[i]);    
    break;
    }
}

// 8.Skip negatives print only positive numbers from an array (continue).
// Pseudocode:
// 1. Start
// 2. Create an array containing positive and negative numbers.
// 3. Loop through each number in the array.
// 4. If the number is negative, skip it using continue.
// 5. Otherwise, print the number.
// 6. End
 let arr3=[-1,2,5,6,-4,5,-8,-3,10]
 for (let number of arr3){
    if( number < 0){
             continue;
    }
    console.log("Positive number:" + number);
 }

 // 9. Multiplication table print the 7 times table from 7×1 to 7×12 in the format 7 x 3 = 21.
 // Pseudocode:
// 1. Start
// 2. Set the multiplier to 1.
// 3. Repeat while the multiplier is less than or equal to 12:
//    a. Multiply 7 by the multiplier.
//    b. Print the result in the format "7 x multiplier = result".
//    c. Increase the multiplier by 1.
// 4. End
let multiplier = 1;
for (let i=1 ;i<= 12; i++){
    multiplier= 7 * i;
      console.log("7 x " + i + " = " + multiplier);
}
// 10. FizzBuzz from memory, then change it: numbers divisible by 7 print "Kigali";.
// Pseudocode:
// 1. Start
// 2. Loop through numbers from 1 to 100.
// 3. If the number is divisible by both 3 and 5, print "FizzBuzz".
// 4. Otherwise, if the number is divisible by 3, print "Fizz".
// 5. Otherwise, if the number is divisible by 5, print "Buzz".
// 6. Otherwise, if the number is divisible by 7, print "Kigali".
// 7. Otherwise, print the number.
// 8. End

let i=1;
for (i=1; i<=100;i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
       
    }else if (i % 3 === 0){
        console.log("Fizz");
    }else if (i % 5 === 0){
        console.log("Buzz");
    }else if (i % 7 === 0){
        console.log("Kigali");
    }else{
        console.log(i);
    }
}