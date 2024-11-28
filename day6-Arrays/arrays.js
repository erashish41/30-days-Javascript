// Arrays

// Activity 1: Array Creation and Access
// • Task 1: create an array of number 1 to 5 and log the array to console.
const arr1 = [1,2,3,4,5]
console.log(arr1);

// Task 2: access 1 and last element of array
const result1 = (arr1[0], arr1[arr1.length - 1]);
console.log(result1);

const result01 = arr1[arr1.length - 1]
console.log(result01);


// Activity 2: Array Methods (Basic)
// Task 3: Use the push method to add new number to the end of the array and log the updated array.
const arr2 = [1,2,3,4,5]
const result2 = arr2.push(9)
console.log(result2, arr2);

// • Task 4: Use the pop method to remove the last element from the array and log the updated array.
const arr3 = [1,2,3,4,5]
const result3 = arr3.pop(1)
console.log(result3, arr3);

// • Task 5: Use the shift method to remove the first element from the array and log the updated array.
const arr4 = [99, 88, 77, 66]
const result4 = arr4.shift()
console.log(result4, arr4);

// • Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.
const arr5 = [99, 88, 77, 66]
const result5 = arr5.unshift(11)
console.log(result5, arr5);


// Activity 3: Array Methods (Intermediate)
// • Task 7: Use the map method to create a new array where each number is doubled and log the new array.
const arr6 = [2,4,5,1,77]
const result6 = arr6.map((num, index) =>{
    return  num * 2
})
console.log(result6);

// • Task 8: Use the filter method to create a new array with only even numbers and log the new array.
const arr7 = [2,4,5,1,77]
const result7 = arr7.filter((num, index) => {
    return num%2 === 0
})
console.log(result7);

// • Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
const arr8 = [2,4,5,1,77]
const result8 = arr8.reduce((acc, curr) => {
    return acc + curr;
}, 0)
console.log(result8);


// Activity 4: Array Iteration
// • Task 10: Use a for loop to iterate over the array and log each element to the console.
const arr9 = [12,0,24,5,1,77]
for(let i=0; i<arr9.length; i++){
     console.log(arr9[i]);
}

// or
const result9 = []
for(let i=0; i<arr9.length; i++){
    result9.push(arr9[i])
}
console.log(result9);

// • Task 11: Use the forEach method to iterate over the array and log each element to the console.
const arr10 = [12,0,24,5,1,77]
const result10 = arr10.forEach((num)=>{
    console.log(num);
})

// or 
const result010 = arr10.join(" ")
console.log(result010);


// Activity 5: Multi-dimensional Arrays
// • Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.
const arr11 = [[1,2,3,4], [5,6,7,8],[11,22,33]];
console.log(arr11);

// or
const result11 = arr11.flat()
console.log(result11);

// • Task 13: Access and log a specific element from the two-dimensional array.
const result12 = arr11[1][0]
console.log(result12);



// Feature Request:
// 1. Array Manipulation Script: Write a script that demonstrates the creation of an array, adding and removing elements using push, pop, shift, and unshift methods.
// 2. Array Transformation Script: Create a script that uses map, filter, and reduce methods to transform and aggregate array data.
// 3. Array Iteration Script: Write a script that iterates over an array using both for loop and forEach method and logs each element.
// 4. Two-dimensional Array Script: Create a script that demonstrates the creation and manipulation of a two-dimensional array.
// Achievement:
// By the end of these activities, students will:
// • Create and manipulate arrays using various methods.
// • Transform and aggregate array data using map, filter, and reduce.
// • Iterate over arrays using loops and iteration methods.
// • Understand and work with multi-dimensional arrays.


// E X T R A
const cars = ["Saab", "Saab", "Volvo", "Volvo", "Volvo", "BMW", "BMW", "BMW", "BMW"];
// map
const lowercase = cars.map((item) => item.toLocaleLowerCase())
const uppercase = cars.map((item) => item.toUpperCase())
console.log(lowercase, uppercase);

const result13 = cars.join(" ")
console.log(result13);

// filter
const filtercars = cars.filter((item) =>{
    return item === "Saab"
})
console.log(filtercars);

// or
const onecar = []
for(let i =0; i<cars.length; i++){
    if(cars[i] === "Volvo"){
        onecar.push(cars[i])
    }
}
console.log(onecar);

// count the cars
// const cars = ["Saab", "Saab", "Volvo", "Volvo", "Volvo", "BMW", "BMW", "BMW", "BMW"];
const car_brand_count = { }
for(let i=0; i<cars.length; i++){
    let carcount = cars[i]
    if(car_brand_count[carcount]){
        car_brand_count[carcount] += 1
    }else{
        car_brand_count[carcount] = 1
    }
}
console.log(">>>>> car_brand_count", car_brand_count);

// count with function
let count1 = 0;
function carCount(carname){
    for(let i=0; i<cars.length; i++){
        console.log(">>>>current car :", cars[i])
        if(carname === cars[i]){
            count1 += 1
        }
    }
    return count1
}
console.log(carCount("BMW"));

// or
let count2 = 0;
function carMap(){
    let mapinfo = cars.filter((item) => item === "Volvo")
    return mapinfo;
}
const res = carMap();
console.log(res.length);

// // find min
const number = [2,6,3,2,1,0,51,6,90,5,6,7,88]
let minnumber = number[0]
for(let i=0; i<number.length; i++){
    if(number[i] < minnumber){
        minnumber = number[i]
    }
}
console.log(minnumber);

// find max  ---   const number = [2,6,3,2,1,0,51,6,90,5,6,7,88]
let maxnumber = number[0];
function maxFind(number){
    for(let i=0; i<number.length; i++)
    if(number[i] > maxnumber){
        maxnumber = number[i]
    }
    return maxnumber
}
const resluttt = maxFind(number)
console.log(resluttt);


// array with string
const carsInfo = ["Tesla","Kia","Ford","Toyota","Audi","Honda","BMW","Audi ","Hyundai","Kia"];  
function carCount(arr){
    let count = 0;
    for(let i=0; i<arr.length; i++){
        count = count + 1;
    }
    return count;
}
const resultCount = carCount(carsInfo);
console.log(resultCount);
