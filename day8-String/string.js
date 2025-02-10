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

// for loop
let repeatCount = 3;
let repeatString = "";
for(let i=0; i < stringA.length; i++){
    repeatString += stringA;
}
console.log(repeatString);


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


const resultSz = stringA.startsWith("Ash");
console.log("starts with Ash",resultSz);

const resultSaa = stringA.endsWith("j");
console.log(resultSaa);

// first occurrence of "h"
const resultSab = stringA.lastIndexOf("h");
console.log(resultSab);

// split into word
const resultSac = stringA.split(" ");
console.log(resultSac);

// character
const resultSad = stringA.split("");
console.log(resultSad);

// How do I join an array ["Ashish", "Bhardwaj"] back into a string?
let arr = ["Ashish", "Bhardwaj"];
const resultSae = arr.join(" ");
console.log("back array to string - ", resultSae)

const resultSaf = stringA.split("").reverse().join("")
console.log(resultSaf);

// remove and count  "h"
const resultSag = stringA.split("h").join("")
console.log("remove h - ", resultSag);

const resultSah = stringA.split("h").length-1;
console.log("count of h is - ",resultSah);

// count vowels
const stringNew = "Ashish Bhardwaj from Gurdaspur in Punjab 143521"
const vowel = ["a", "e", "i", "o", "u"];
let vowelFounds = [];

for(let char of stringNew.toLocaleLowerCase()) {
    if(vowel.includes(char)){
        vowelFounds.push(char);
    }
}
console.log("count vowels are ",vowelFounds);

// initial letter of full string
let wordA = stringNew.split(' ');
let initialLetter = "";
for(let i=0; i < wordA.length; i++){
    initialLetter += wordA[i][0].toUpperCase();
}
console.log(initialLetter);

// find number
let numericPart = "";
for(let i=0; i<stringNew.length; i++){
    if(stringNew[i] >= 0 && stringNew[i] <= 9){
        numericPart += stringNew[i];
    }
}
console.log("numeric part is - ", numericPart);

// last word
let wordB = stringNew.split(' ');
let lastWord = wordB[wordB.length - 1];
console.log(lastWord);

// remove everything after "in"
let splitIn = stringNew.split("in")[0];
console.log(splitIn);

// indexof numeric
let firstIndex = stringNew.split("").indexOf("1");
console.log(firstIndex);

// with for loop
let indexWithLoop = [];
for(let i=0; i< stringNew.length; i++){
    if(stringNew[i] >= 0 && stringNew[i] <= 9){
        indexWithLoop.push(i);
        break;
    }
}
console.log(indexWithLoop);

// any vowel
let vowelB = ["a", "e", "i", "o", "u"]
for(let i=0; i<stringNew.length; i++){

}