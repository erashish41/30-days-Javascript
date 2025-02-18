// // 2 types of Function
// a.Function declaration : always have name of function and can be hoisted

// b.Function expression : can be anonymous or name of function and can't be hoisted

// Tasks/Activities:
// Activity 1: Function Declaration
// : Task 1: Write a function to check if number is even or odd and return the result console.
function number(num1){
    if(num1%2 === 0){
        return `${num1} is even`;
    }else{
        return `${num1} is odd`;
    }
}
const result1 = number(88);
console.log(result1);

// : Task 2: Write a function to calculate the square of a number and return result in console.
const num2 = 4;
function square(num2){
    return num2 * num2;
}
const result2 = square(num2);
console.log(`square of ${num2} is ${result2}`);

// Activity 2: Function Expression
// : Task 3: Write a function expression to find the maximum of two numbers and console.
const maximum = (num3, num4) => {
    return num3 > num4 ? `${num3} is greater than ${num4}` : `${num3} is smaller than ${num4}`
}
const result3 = maximum(133, 77);
console.log(result3);


// : Task 4: Write a function expression to concatenate two strings and result to the console.
const str1 = "Ashish";
const str2 = "Bhardwaj";
const concate1 = (str1, str2) => {
    return str1 + str2;
}
const result4 = concate1(str1, str2)
console.log(result4);

//  or 
const concate2 = str1.concat(str2);
console.log(concate2);

// Activity 3: Arrow Functions
// : Task 5: Write an arrow function to calculate the sum of two numbers and result to console.

// // why not 
// const sum1 = (num5, num6) => {
//     return num5 + num6;
// }
// const result5 = sum1(6, 9);
// console.log(`sum of ${num5} and ${num6} numbers is ${result5}`);

// why this
const num5 = 6;
const num6 = 8;
const sum1 = (num5, num6) => {
    return num5 + num6;
}
const result5 = sum1(num5, num6);
console.log(`sum of ${num5} and ${num6} numbers is ${result5}`);


// : Task 6: Write an arrow function to check string contains a specific character and return a boolean value.
const str3 = "Full Stack Developer";
const specific = (str, char) => {
    return str.includes(char)
}
const result6 = specific(str3, "Ashish");
console.log(result6);

const str4 = "Full Stack Developer";
const task = (str, char) => {
    return str.includes(char)
}
console.log(task(str4, "hello"));



// Activity 4: Function Parameters and Default Values
// • Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
const num7 = 12;
const num8 = 5;
function product(num7, num8){
    return num7 * num8;
}
const result7 = product(num7, num8);
console.log(`product of ${num7} and ${num8} is ${result7}`);

// • Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
const personName = "Coder";
const personAge = 99;
function greeting(personName, personAge = 88){
    return `Hi ${personName}! how are you developer? your age is ${personAge}`
}
const result8 = greeting(personName);
console.log(result8);



// Activity 5: Higher-Order Functions
// Task 9. write high-order function that takes a function and a number, and call function many times.
function highOrder(func, times){
    for(let i = 0; i < times; i++){
        func()
    }
}
function sayHello(){
    console.log("Hello");
}
highOrder(sayHello, 7);

// Task 10. write high-order function that takes two function and a number applies
//    the first function to the value, then apply the second function to the result. 



// Question: Create a function that takes a name as a parameter and greets the user. 
//      If the name is not provided, use "Guest" as the default name.
function greeting2(name1 = "Guest") {
    return `Hello! ${name1}`
}
const result9 = greeting2("Ashish");
console.log(result9);


// find the max number with function 
function findMax(a,b,c){
    return Math.max(a,b,c)
}
const result10 = findMax(7,8,9);
console.log(result10);

const arr1 = [ 1,2,3,4,5,6]
function book(arr1){
    return Math.max(...arr1)
}
const res = book(arr1)
console.log(res);


const arr = [1, 2, 3];
const a = Math.max(...arr);
const b = Math.max(arr);
console.log(a);
console.log(b);


const numbers = [1, 2, 3];
function add(a, b, c) {
    return a + b + c;
}
console.log(add(...numbers)); // Output?

// find max
function max(...values) {
    return Math.max(...values);
}
console.log(max(1, 2, 3));       // Output: 3
console.log(max(...[1, 2, 3])); // Output: 3

const arr3 = [1, 2];
const arr4 = [3, 4];
// const result11 = Math.max(...arr3, ...arr4);
const result11 = Math.max(...arr3.concat(arr4))
console.log(result11);

// Feature Request:
// 1. Even or Odd Function Script: Write a script that includes a function to check if a number is even or odd and logs the result.
// 2. Square Calculation Function Script: Create a script that includes a function to calculate the square of a number and returns the result.
// 3. Concatenation Function Script: Write a script that includes a function expression to concatenate two strings and returns the result.
// 4. Sum Calculation Arrow Function Script: Create a script that includes an arrow function to calculate the sum of two numbers and returns the result.
// 5. Higher-Order Function Script: Write a script that includes a higher-order function to apply a given function multiple times.
// Achievement:
// By the end of these activities, students will:
// • Understand and define functions using function declarations, expressions, and arrow functions.
// • Use function parameters and default values effectively.
// • Create and utilize higher-order functions.
// • Apply functions to solve common problems and perform calculations.
// • Enhance code reusability and organization using functions.


//  Extra
// to print number 10 with function
function print(){
    for (let i = 0; i < 10; i++) {
        console.log(i);
    }
}
print()

// 1. Write a JavaScript function that reverses a number.
const number1 = 32243;
function reverseNumber(item){
    return ouptut1 = item.toString().split('').reverse().join()
         
}
console.log(reverseNumber(number1));

// 2. Write a JavaScript function that checks whether a passed string is a palindrome or not?






// extra - 
// a. 1st function in 2nd function 
function one(){
    console.log("hello one")
}
function two(newFunction){
    console.log("hello three");
    newFunction();
    console.log("hello two");
}
two(one)


console.log("----------------");

// b. 2nd function in 1st function 
function newOne(oldFunction){
    console.log("hello 1");
    oldFunction()
}
function newTwo(){
    console.log("hello 2");
}
newOne(newTwo)