// O P E R A T O R S

// Activity 1: Arithmetic Operations
// Task 1: Write a program to add two numbers and log the result to the console.
let x1 = 80;
let y1 = 12;
let c1 =  x1 + y1;
console.log(c1)

// Task 2: Write a program to subtract two numbers and log the result to the console.
let x2 = 590;
let y2 = 350;
let c2 =  x2 - y2;
console.log(c2)

// Task 3: Write a program to multiply two numbers and log the result to the console.
let x3 = 400;
let y3 = 20;
let c3 =  x3 * y3;
console.log(c3)

// Task 4: Write a program to divide two numbers and log the result to the console.
let x4 = 80;
let y4 = 12;
let c4 =  x4/y4;
console.log(c4)

// Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console.
let x5 = 80;
let y5 = 12;
let c5 =  x5 % y5;
console.log(c5)


// Activity 2: Assignment Operators
// we can't use -=/+= operator with const variable
// Task 6: Use the += operator to add a number to a variable and log the result to the console.
var a1 = 80;
a1 += 12;
console.log(a1)

// Task 7: Use the -= operator to subtract a number from a variable and log the result to the console.
let b1 = 890;
b1 -= 350;
console.log(b1);


// Activity 3: Comparison Operators
// Task 8: Write a program to compare two numbers using > and < and log the result to the console.
function compare1 (num1, num2) {
    if(num1 > num2){
        console.log(`${num1} is greater than ${num2}`);   
    }
    else if(num1 < num2){
        console.log(`${num1} is smaller than ${num2}`);   
    }
    else{
        console.log(`${num1} is equal to ${num2}`);   
    }
}
compare1(2,3)

// Task 9: Write a program to compare two numbers using >= and <= and log the result to the console.
function compare2 (num3, num4) {
    if(num3 >= num4){
        console.log(`${num3} is greater or equal than ${num4}`);   
    }
    else if(num3 <= num4){
        console.log(`${num3} is smaller or equal than ${num4}`);   
    }
    else{
        console.log(`${num3} is invalid number ${num4}`);   
    }
}
compare2(12,12)

// Task 10: Write a program to compare two numbers using == and === and log the result to the console.
function compare3 (num5, num6){
    if(num5 === num6){
        console.log(`${num5} is equal to ${num6} and of same data type `);
    }if(num5 == num6){
        console.log(`${num5} is equal to ${num6} and of different data type`);    
    }else{
        console.log(`${num5} is invalid number ${num6}`);   
    }
}
compare3(12, "99")


// Activity 4: Logical Operators
// Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.
// let num7 = 400;
// let num8 = 500;
const compare4 = (num7, num8) => {
    if((num7 != num8) && (num7 > num8)){
        return(`${num7} is greater than ${num8}`);
    }if((num7 != num8) && (num7 < num8)){
        return(`${num7} is smaller than ${num8}`);    
    }else{
        return(`${num7} is invalid number ${num8}`);   
    }
}
console.log(compare4(800, 500));

// Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.
const compare5 = (num9, num10) => {
    if((num9 > num10) || (num9 != num10)){
        return(`${num9} is greater than ${num10}`);
    }if((num9 < num10) || (num9 != num10)){
        return(`${num9} is smaller than ${num10}`);    
    }else{
        return(`${num9} is invalid number ${num10}`);   
    }
}
console.log(compare5(100, 500));


// • Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.
// Activity 5: Ternary Operator
// • Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.
// Feature Request:
// 1. Arithmetic Operations Script: Write a script that performs basic arithmetic operations (addition, subtraction, multiplication, division, remainder) on two numbers and logs the results.
// 2. Comparison and Logical Operators Script: Create a script that compares two numbers using different comparison operators and combines conditions using logical operators, logging the results.
// 3. Ternary Operator Script: Write a script that uses the ternary operator to determine if a number is positive or negative and logs the result.
// Achievement:
// By the end of these activities, students will:
// • Understand and use arithmetic operators to perform basic calculations.
// • Use assignment operators to modify variable values.
// • Compare values using comparison operators.
// • Combine conditions using logical operators.
// • Use the ternary operator for concise conditional expressions.