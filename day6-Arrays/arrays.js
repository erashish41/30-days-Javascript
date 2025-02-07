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
const carBrand = ["Tesla","Kia","Ford","Toyota","Audi","Honda","BMW","Audi","Hyundai","Kia"];

// find the whole array
function dataCars(arr){
    for(let i=0; i<arr.length; i++){
        console.log(arr[i].toString());
    }
}
dataCars(carBrand)

// find the length of array
function carLength(arr){
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        count = count + 1;      // count++
    }
    return count;
}
let carLengthResult = carLength(carBrand);
console.log(carLengthResult);


// unique 
function uniqueBrand(arr){
    let uniqueCars = [];
    for(let i=0; i<arr.length; i++){
        if(!uniqueCars.includes(arr[i])){
            uniqueCars.push(arr[i])
        }
    }
    return uniqueCars;
}
let uniqueBrandResult = uniqueBrand(carBrand);
console.log(uniqueBrandResult);

// occurence of each element
function occurenceEachBrand(arr){
    let occuredBrand = {}
    for(let i=0; i<arr.length; i++){
        let brand = arr[i]
        if(occuredBrand[brand]){
            occuredBrand[brand]++;
        }else{
            occuredBrand[brand] = 1;
        }
    }
    return occuredBrand;
}
let occuredBrandResult = occurenceEachBrand(carBrand);
console.log(occuredBrandResult);

// occured spicific elenent
function specificCarBrand(arr, element){
    let specificCar = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i] === element){
            specificCar.push(arr[i])
        }
    }
    return specificCar
}
let specificCarResult = specificCarBrand(carBrand, "Kia");
console.log(specificCarResult);

// find the first index of car
// const carBrand = ["Tesla","Kia","Ford","Toyota","Audi","Honda","BMW","Audi","Hyundai","Kia"];
function firstIndexOfCar(arr, brand){
    for(let i =0; i<arr.length; i++){
        if(arr[i] === brand){
            return i;
        }
    }
    return -1;
}
let firstIndexResult = firstIndexOfCar(carBrand, "Audi");
console.log(firstIndexResult);

// all occurence of single element
function occureSingleCar(arr, brand){
    let singleCarOccure = [];
    for(let i =0; i<arr.length; i++){
        if(arr[i] === brand){
            singleCarOccure.push(i)
        }
    }
    return singleCarOccure;
}
let occureCarResult = occureSingleCar(carBrand, "Audi");
console.log(occureCarResult);

// replace with old element to new element 
function newCarBrand(arr, oldBrand, newBrand){
    for(let i=0; i<arr.length; i++){
        if(arr[i] === oldBrand){
            arr[i] = newBrand
        }
    }
    return arr; 
}
let newCarResult = newCarBrand(carBrand, "Audi", "Tesla");
console.log(newCarResult);

// sort alphabetically
function sortArray(arr){
    return arr.slice().sort()
}
let sortArrayResult = sortArray(carBrand);
console.log(sortArrayResult);


// extra basic of array
let arrayA = ["Ashish", "Rajat", "Shivam","Gurmeet", "Akash"];
const resultAa = arrayA[0];
console.log(resultAa)

arrayA[5] = "African"
console.log(arrayA)

const resultAb = arrayA.toString();
console.log(resultAb)

const resultAc = typeof arrayA;
console.log(resultAc)

const resultAd = Date.now();
console.log(typeof resultAd)

const resultAe = Date.now;
console.log(typeof resultAe)

const resultAf = arrayA.length;
console.log("length of array is ",resultAf)

// let arrayA = ["Ashish", "Rajat", "Shivam","Gurmeet", "Akash"];
arrayA[10] = "kida";
console.log(arrayA)

const resultAg = Array.isArray(arrayA);
console.log(resultAg)

const resultAh = arrayA.at(4);
console.log(resultAh);

const resultAi = arrayA.join();
console.log(resultAi);

const resultAj = arrayA.pop();
console.log(resultAj)

arrayA[arrayA.length] = "chikku"
console.log(arrayA);

const resultAk = arrayA.splice(2,0, "hello", "ki");
console.log(resultAk);

let arrayB = ["Suzuki", "Dodge", "Toyota","Nissan", "Byd", "Dodge"];
const resultBa = arrayB.toSpliced(2,0, "ki", "hello");
console.log(resultBa);

const resultBb = arrayB.indexOf("pen");
console.log("indexOf pen is ",resultBb);

const resultBc = arrayB.at(2);
console.log(resultBc);

const resultBd = arrayB.indexOf("Dodge");
console.log("indexOf Dodge is ",resultBd);

const resultBe = arrayB.indexOf("Dodge");
console.log("last index of Dodge is",resultBe);

const resultBf = arrayB.sort();
console.log("sorting of array is ",resultBf);

const resultBfd = arrayB.toSorted();
console.log("sosssrting of array is ",resultBfd);

const resultBg = arrayB.reverse();
console.log("reverse of array is ",resultBf);

const arrayC = [[1,2,3], [4,5,6], [7,8,9]]
const resultCa = arrayC.flat();
console.log(resultCa);

const arrayD = [40, 100, 1, 5, 25, 10];
const resultDa = arrayD.sort();
console.log(resultDa);

const resultDb = arrayD.sort(function(a,b){return a-b});
console.log(resultDb);

const resultDc = arrayD.sort(function(a,b){ return b-a});
console.log(resultDc);

// sorting array with object
const carsArray = [{type:"Volvo", year:2016}, {type:"Saab", year:2001}, {type:"BMW", year:2010}];
const resultCara = carsArray.sort((a,b) => (a.type.localeCompare(b.type)));
console.log(resultCara);


const myArr = [
    {name:"X19",price:120 },
    {name:"X01",price:100 },
    {name:"X02",price:100 },
    {name:"X03",price:100 },
    {name:"X04",price:110 },
    {name:"X05",price:110 },
    {name:"X06",price:110 },
    {name:"X07",price:110 },
    {name:"X08",price:120 },
    {name:"X99",price:120 },
    {name:"X10",price:120 },
    {name:"X11",price:120 },
    {name:"X12",price:130 },
    {name:"X13",price:130 },
    {name:"X14",price:130 },
    {name:"X15",price:130 },
    {name:"X16",price:140 },
    {name:"X17",price:140 },
    {name:"X18",price:140 },
    {name:"X00",price:140 }
];
const resultAr = myArr.sort((a,b) => a.name.localeCompare(b.name));
console.log(myArr);
