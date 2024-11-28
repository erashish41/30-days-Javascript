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


// Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.
let index = 0;
let summm = 0
while(index <= 10){
    summm =+ index
    index++
}
console.log(`sum is:  ${sum}`);





// Task 4: Write a program to print the number from 10 to 1 using a while loop.
let num4 = 10;
while (num4 > 0) {
    num4 --;
    console.log(num4);
}


// while with array
const arr1 = ["ashish", "rajat", "shivam"]
let index1 = 0;
while(index1 < arr1.length){
    console.log(">>>>>>>",arr1[index1]);
    index1 = index1 + 1
}



// Activity 3: Do...While Loop
// Task 5: Write a program to print the number from 1 to 5 using a do while loop.
let num5 = 5;
do{
    console.log(num5);
    num5--
}
while( num5 >= 1);


let num05 = 0;
do{
    console.log("========",num05);
    num05++;
}while(num05 <= 10)



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

// a.  other method 
const numberSeries = [2,6,3,2,1,0,51,6,90,5,6,7,88]
let evenNum2 = [];
let oddNum2 = [];
for(let i=0; i<numberSeries.length; i++){
    let currentNum = numberSeries[i];
    if(currentNum%2===0){
        evenNum2.push(currentNum);
    }else{
        oddNum2.push(currentNum);
    }
}
console.log(evenNum2, oddNum2);

// b.
let evenNum3 = [];
let oddNum3 = [];
let firstEven = 0;
let firstOdd = 0;
for(let i=0; i<numberSeries.length; i++){
    let currItem = numberSeries[i];
    if(currItem%2===0){
        evenNum3[firstEven] = currItem;
        firstEven++;
    }else{
        oddNum3[firstOdd] = currItem;
        firstOdd++;
    }
}
console.log(evenNum3, oddNum3);


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

// k. greater or smaller
let greatNum = num7.filter((x) => x > 5)
console.log("great part ", greatNum);

let smallNum = num7.filter((x) => x < 5)
console.log("small part ",smallNum);

// l. Count Occurrences of Each Number   || const num7 = [9, 3, 6, 1, 0, 4, 2, 17];
const occureNum = num7.reduce((acc, curr) => {
    acc[curr] = (acc[curr]|| 0 + 1);
    return acc;
}, {})
console.log(occureNum);

// m. diff btw maxNum and minNum
let maxNum2 = num7[0];
let minNum2 = num7[0];
for (let i = 0; i < num7.length; i++) {
    if(num7[i] > maxNum2){
        maxNum2 = num7[i];
    }else{
        minNum2 = num7[i]
    }
}
console.log(maxNum2, minNum2);
const diff = maxNum2 - minNum2;
console.log(diff);


// n. unique and duplicate
// A Set is a quick and simple way to remove duplicates from an array.
const uniq = [...new Set(num7)]
console.log(uniq);

// The indexOf() method returns the first index at which a given element (num) is found in the array.
const duplicate = num7.filter((num, index, arr) => arr.indexOf(num))
console.log(duplicate);



// o. 12. Add a Number to Each Element
const addTwo = num7.map(num => num + 2);
console.log(addTwo);

// p. square each number 
const square1 = num7.map(num => num * num);
console.log(square1);


const aaa = [...num7].sort((a,b) => a - b);
console.log(aaa);
const bbb = num7.sort((a,b) => b - a);
console.log(bbb);



function mobile(){
    let largeMobile = num7[0];
    for(let i = 0; i< num7.length; i++){
        if(num7[i] < largeMobile){
            largeMobile = num7;
        }
    }
    console.log(largeMobile);
}
mobile();


// q. find the number which is written only once among the arr, with the help of function and pass this arr in it
function findUniqueNumbers(arr) {
    const countMap = arr.reduce((acc, num) => {
      acc[num] = (acc[num] || 0) + 1; // Count occurrences of each number
      return acc;
    }, {});
  
    // Filter numbers that appear only once
    return Object.keys(countMap)
      .filter(key => countMap[key] === 1)
      .map(Number); // Convert keys back to numbers
  }





//   ---------------------------------
//print number
for(let i1=10; i1>0 ; i1--){
    console.log(i1);   
}

//multiplye
for(let i2=1; i2<=5; i2++){
    console.log(5*i2);   
}

//sum
const n = 10;
let sum11 = 0;
for(let i=0; i<n; i++){
    sum11+=i; // sum = sum + i;
}
console.log(sum11);

//table
const n1 = 5;
for(let i=1; i<10; i++){
    console.log(n1*i);
}

// //pattern
// const n2 = 5;
// for(let i=1; i<=5; i++){
//     pattern += "*";   
// }
// console.log(pattern);

// or
const row = 5;
for(let i=1; i<=5; i++){
    let pattern = "";
    for(let j=1; j<=i; j++){
        pattern += "*";
    }
    console.log(pattern);
}


// extra
const nummmm = [ 9,6,7,8,1,2,3,400,22,44,55,12,30,0, 3,1, 32, 98]
const sortnum = nummmm.sort((x,y) => y - x)
console.log(sortnum);

// min
let minnumber = nummmm[0];
for(let i=0; i<nummmm.length; i++){
    if(nummmm[i] < minnumber){
        minnumber = nummmm[i]
    }
}
console.log(minnumber);

// max
let maxnumber = nummmm[0];
function maxNumbe(){
    for(let i=0; i<nummmm.length; i++){
        if(nummmm[i] > maxnumber){
            maxnumber = nummmm[i]
        }
    }
    return maxnumber;
}
console.log(maxNumbe(nummmm));

// sum:      const nummmm = [ 9,6,7,8,1,2,3,400,22,44,55,12,30,0, 3,1, 32, 98]
let sum01 = 0;
function findSum(arr){
    for(let i=0; i<arr.length; i++){
        sum01+= arr[i]
    }
    return sum01
}  
const result1 = findSum(nummmm);
console.log(result1);

// average
let sum010 = 0;
function averageNumber(arr){
    for(let i=0; i<arr.length; i++){
        sum010+= arr[i];
    }
    return sum010/arr.length;
}
const avgnum = averageNumber(nummmm);
console.log(avgnum);

// even 
let even = []
function evenNumber(arr){
    for(let i=0; i<arr.length; i++){
        if(arr[i]%2 === 0){
            even.push(arr[i])
        }
    }
    return even;
}
const evennumber = evenNumber(nummmm);
console.log(evennumber.sort((x,y)=> x-y));

// odd
let odd = []
function oddNumber(arr){
    for(let i=0; i<arr.length; i++){
        if(arr[i]%2 !== 0){
            odd.push(arr[i])
        }
    }
    return odd
}
const oddnumber = oddNumber(nummmm);
console.log(oddnumber);


// find how many times number appears
 const new_number_input = [ 9,6,7,8,1,2,3,400,22,44,55,12,30,0, 3,1, 32, 98]
function numberAppears(num, index){
    let count = 0;
    for(let i=0; i<num.length; i++){
        if(num[i] === index){
            count = count + 1
       }
    }
    return count;
}
const appear = numberAppears(nummmm, 1);
console.log(appear);

// reverse array
let reversen = []
function reverseNumber(num){
    for(let i=0; i<num.length; i++){
         reversen.unshift(num[i])
        //  reversen.splice(0, 0, num[i])
    }
    return reversen
}
const reverese_results = reverseNumber(new_number_input);
console.log('>>>>>>> i am running >>>>> as input', new_number_input)
console.log('reverese_results',reverese_results);


// or 
function reverseNumber(num){
    let newreverse = []

    for(let i= num.length -1; i >=0; i--){
         newreverse.push(num[i])
    }
    return newreverse
}
const result01 = reverseNumber(nummmm);
console.log('count 2', result01);

// greater number
const newNumber = [ 9,6,7,8,1,2,3,400,22,44,55,12,30,0, 3,1, 32, 98]
let greaternumber = newNumber[0]
function greatestNumber(num){
    for(let i=0; i<num.length; i++){
        if(num[i] > greaternumber){
            greaternumber = num[i];
        }
    }
    return greaternumber;
}
const greaterResult = greatestNumber(newNumber);
// console.log("<<<<<<<", newNumber);

console.log(greaterResult);

// greater than
function greaterThanNumber(num, target){
    let greaterThan = []
    for(let i=0; i<num.length; i++){
        if(num[i] >= target){
            greaterThan.push(num[i])
        }

    }
    return greaterThan;
}
const resultGreaterThan = greaterThanNumber(newNumber, 22);
console.log('count 2', resultGreaterThan);


