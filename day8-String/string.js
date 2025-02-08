// string
let stringA = "Ashish Bhardwaj";
let resultSa= stringA.split()
console.log(resultSa)

let resultSb = stringA.includes("ish");
console.log(resultSb)

let resultSc = stringA.startsWith("ashi");
console.log(resultSc)

let resultSd = stringA.endsWith("aj");
console.log(resultSd)

let resultSe = stringA.toUpperCase();
console.log(resultSe)

let resultSf = stringA.toLowerCase();
console.log(resultSf)

let resultSg = stringA.charAt(7);
console.log(resultSg)

let stringB = " Ashish Bhardwaj ";
let resultSh = stringB.trim();
console.log(resultSh)

let resultSi = stringB.indexOf("a");
console.log(resultSi)

let resultSj = stringB.repeat((3));
console.log(resultSj)

let resultSk = stringB.at(10);
console.log(resultSk)

let resultSl = stringA.slice(0,-10);
console.log(resultSl)

let resultSm = stringA.slice(-10);
console.log(resultSm)

let resultSn = stringA.replace("Bhardwaj", "Ashu");
console.log(resultSn)

let resultSo = stringA.repeat(2);
console.log(resultSo)

let resultSp = stringA.split("|");
console.log(resultSp)

let resultSq = stringA.lastIndexOf("Bhardwaj")
console.log(resultSq)

let resultSr = stringA.indexOf("Bhardwaj")
console.log(resultSr)

// let stringA = "Ashish Bhardwaj";
// find how many times "a" comes
let count = 0;
for(let i=0; i<stringA.length; i++){
    if(stringA[i].toLowerCase() === "a"){
        count ++;
    }
}
console.log("a comes for ", count);

// or
let countA = 0;
for(let char of stringA.toLowerCase()){
    if(char === "a"){
        countA ++;
    }
}
console.log("count for a is ", countA);

// How can you check if the string contains the word "Bhardwaj"?
const resultSs = stringA.includes("Bhardwaj");
console.log(resultSs);

// How can you extract "Ashish" from the string?
const resultSt = stringA.slice(0,6);
console.log("extracted string ",resultSt);

const resultSu = stringA.slice(6,15);
console.log(resultSu);

console.log(stringA.length);

// replace "Ashish" with "John"
const resultSv = stringA.replace("Ashish", "John");
console.log("Ashish replaced with John - ",resultSv);

const resultSw = stringA.split();
console.log(resultSw);

// occurrence
const resultSx = stringA.toLowerCase().indexOf("a")
console.log("first occurrence of a is ", resultSx);

const resultSy = stringA.toLowerCase().lastIndexOf("a");
console.log("last occurrence of a is ",resultSy);

// count the "a" letter how many times come
const resultSz = stringA.split();
console.log(resultSz);

