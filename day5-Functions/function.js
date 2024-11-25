// // Function
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



// : Task 6: Write an arrow function to checkite steing contains a specific character and return a boolean value.
// Activity 4: Function Parameters and Default Values
// • Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
// • Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
// Activity 5: Higher-Order Functions
// Task 9. tea higherder unition the takes un tine tons a num varue, a als the unst unto no the value, and then apies the second function to the result.
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