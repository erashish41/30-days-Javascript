// Activity 1: For Loop
// Task 1: Write a program to print number from 1 to 10 using a for loop.
for(let num1 = 0; num1 <= 10; num1++){
    console.log(num1);
}

// for(let num1 = 10; num1 > 0; num1--){
//     console.log(num1);
// }

// // with function
// function findList(){
//     for (let index = 0; index <= 10; index++) {
//         console.log(index);
//     }
// }
// findList()


// : Task 2: Write a program to print the mutipication table of 5 using a for loop.
for (let num2 = 0; num2 < 5; num2++) {
    console.log(`5 x ${num2} = ${num2 * 5}`);
}


// Activity 2: While Loop
// Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.
let num3 = 1;
let sum = 0;
while(num3 <= 10){
    sum += num3;
    num3 ++;
}
console.log("sum of numbers is: ", sum);

// Task 4: Write a program to print the number from 10 to 1 using a while loop.
let num4 = 10;
while (num4 > 0) {
    num4 --;
    console.log(num4);

}


// Activity 3: Do...While Loop
// Task 5: Write a program to print the number from 1 to 5 using a do while loop.
let num5 = 5;
do{
    console.log(num5);
    num5--
}
while( num5 >= 1);


// Task 5: Write a program to calculate the factoria of number using a do while loop.
let num6 = 4;
let factorial = 1;
do{
    factorial*=1;
    num6--
}
while(num6 > 0);
console.log(num6);



// Activity 4: Nested Loops
// • Task 7: Write a program to print a pattern using nested for loops:
// (ignore color)

// *
// * *
// * * *
// * * * *
// * * * * *

// Activity 5: Loop Control Statements
// • Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.
// • Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.
// Feature Request:
// 1. Number Printing Script: Write a script that prints numbers from 1 to 10 using a for loop and a while loop.
// 2. Multiplication Table Script: Create a script that prints the multiplication table of 5 using a for loop.
// 3. Pattern Printing Script: Write a script that prints a pattern of stars using nested loops.
// 1 Cum Calculation Carint. Writo a corint that calculator the cum of numhare from 1 to 10 ucina a while lann


// 1. Write a JavaScript conditional statement to find the sign of the product of three numbers. Display an alert box with the specified sign.
function multiply(a,b,c){
    let product1 = a * b * c;

    if(product1 >= 0){
        return ("sign is positive");
    }else{
        return ("sign is negative");
    }
}
console.log(multiply(9, 1, -9));

// 2. to find different methods
// a. accesending sort 
const num7 = [9, 3, 6, 1, 0, 4, 2, 17];
const sortNum1 = num7.sort((x, y) => x - y);
console.log(sortNum1);

// b. decending sort
const sortNum2 = num7.sort((x,y) => y - x);
console.log(sortNum2);

// c. Find the Largest Number
function hello(){
    let largeNum = num7[0];
    for(let i = 0; i < num7.length; i++){
        if(num7[i] > largeNum){
            largeNum = num7[i]
        }
    }
    console.log(largeNum);
}
hello()

const max1 = Math.max(...num7)
console.log(max1);

// d. find Smallest Number  ||  const num7 = [9, 3, 6, 1, 0, 4, 2, 17];
let smaleNum = num7[0];
for(let i = 0; i < num7.length; i++){
    if(num7[i] < smaleNum){
        smaleNum = num7[i];
    }
}
console.log(smaleNum);

const min1 = Math.min(...num7);
console.log(min1);

// e. calculate sum  
let sumNum = 0;
let total = num7.reduce((acc,num) =>acc + num, 0 )
console.log(total);

// f. average 
let arrNum = total/ (num7.length);
console.log(arrNum);

// g. even
let evenNum1 = num7.filter((x => x%2 === 0));
console.log(evenNum1.sort());

//  other method
const numberSeries = [2,6,3,2,1,0,51,6,90,5,6,7,88]
let evenNum2 = [];
let oddNum2 = [];
for(let i=0; i<numberSeries.length; i++){
    let currentNum = numberSeries[i];
    if(currentNum%2===0){
        return numberSeries[i] = evenNum2;
    }else{
        return numberSeries[i] = oddNum2;
    }
}
console.log(evenNum2, oddNum2);



// h. odd
let oddNum = num7.filter((y) => y % 2 !== 0)
console.log(oddNum.sort());

// i. Check if an Element Exists
let existNum = num7.includes(6);
console.log(existNum);

let indexNum = num7.indexOf(6);
console.log(indexNum);

// j. reverse the array
let reverseNum = num7.reverse();
console.log(reverseNum);

