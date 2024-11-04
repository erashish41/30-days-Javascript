// Tasks/Activities:


// Activity 1: Variable Declaration
// Task 1: Declare a variable using var, assign it a number, and log the value to the console.
var num1 = 66;
console.log(num1);
 
// Task 2: Declare a variable using let, assign it a string, and log the value to the console.
let str1 = "Ashish Bhardwaj";
console.log(str1);


// Activity 2: Constant Declaration
// Task 3: Declare a variable using const , assign it a boolean value, and log the value to the console.
const boolean1 = true;
console.log(boolean1);


// Activity 3: Data Types
// Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator.

// N U M B E R
let num2 = 13.13;
console.log("typeof 7878 is: ",typeof num2);
console.log(num2.toExponential(1));
console.log(num2.toFixed(1));
console.log(num2.toString());
console.log(num2.toPrecision(1));
/*Passing an argument in the toPrecision() method, If the length of precision passed to the toPrecision()
    method is smaller than the original number then the number is rounded off to that precision. */
console.log("---------------");


// S T R I N G
let str2 = "Apple";
console.log("typeof Apple is: ", typeof str2);
console.log(str2.constructor.name);
console.log(str2.charAt());
console.log(str2.endsWith("e"));
console.log(str2.startsWith("A"));
console.log(str2.toLocaleLowerCase());
console.log(str2.toUpperCase());
console.log(str2.trim());   // trimStart()/ trimEnd()
console.log(str2.repeat(3));
const replace = str2.replace("Apple", "Orange");
console.log(replace);


// B O O L E A N
let boolean2 = false;
console.log("typeof boolean2 is: ", typeof boolean2);
let boolean3 = new Boolean;
console.log(typeof boolean3);   // if new is added to Boolean than type of Boolean changes to Object
console.log(boolean2.toString());
console.log(boolean2.valueOf());
/* The boolean.valueOf() method is used to return a boolean value either “true” or “false” 
    depending upon the value of the specified boolean object. */



let obj1 = {
    name1: "Ashish",
    job: "developer",
    code: 3845
}
console.log("typeof object1 is: ", typeof obj1);

obj1.fullName = function data(){
    return this.name1 + "is" + this.job + "code of" + this.code
}
console.log(obj1);
console.log(obj1["job"]);

const obj2 = { };
obj2.name2 = "javascript";
obj2.year = 2024;
console.log(obj2);
//means we can assign the value to empty object by ourself also
let obj = { }
obj.person = "Ashish";
obj.position = "coding";
console.log(obj);
console.log("<<<<<<<<<<<<<<<<<<<<<<");


// A R R A Y
let arr1 = [7,1,3,9,0,5]
console.log("typeof arr1 is: ", typeof arr1);
console.log(arr1.sort());
console.log(arr1.reverse());
console.log(arr1.splice(2));
arr1.push(99);
arr1.pop(1);
console.log(arr1.length);
console.log(arr1);

console.log(arr1[arr1.length-1]);








// Activity 4: Reassigning Variables
// Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.
let arr2 = "hello !!";
console.log("initial value: ",arr2);

arr2 = "What are you doing ?"
console.log("reassign value: ",arr2);


// Activity 5: Understanding const
// Task 6: Try reassigning a variable declared with const and observe the error.
const arr3 = [1,2,3,4]
console.log(arr3);

// arr3 = [5,6,7]
// console.log(arr3);



// Feature Request:
// 1. Variable Types Console Log: Write a script that declares variables of different data types and logs both the value and type of each variable to the console.
// 2. Reassignment Demo: Create a script that demonstrates the difference in behavior between let and const when it comes to reassignment.
// Achievement:
// By the end of these activities, you will:
// • Know how to declare variables using var, let, and const.
// • Understand the different data types in JavaScript.
// • Be able to use the typeof operator to identify the data type of a variable.
// • Understand the concept of variable reassignment and the immutability of const variables.