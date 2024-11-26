// Object
// Objects are containers for Properties and Methods.
// Properties are named Values.
// Methods are Functions stored as Properties
// Properties can be primitive values, functions, or even other objects.
// both Object.keys() and Object.values() return arrays. Since arrays are iterable,
//   you can directly use forEach to iterate through them.


// Activity 1: Object Creation and Access
// Task 1: create a object represents a book with properties like title, author, and year, and log the object to the console.
const book = {
    title: "best in the world",
    author: "william",
    year: 2021,
}
console.log(book);

// Task 2: access title and author in console.
const title1 = book.title
console.log(title1);

const author1 = book.author
console.log(author1);


// Activity 2: Object Methods
// : Task 3: Add a method to the book object that returns a string with the book's 
//      title and author, and log the result of calling the method.
book.infoBook = function(){
    return `book title is ${this.title} and author is ${this.author}`
}
console.log(book);
console.log(book.infoBook());

// : Task 4: Add a method to the book object that takes a parameter(year) and updates
//       the book's year property then log the updated object.
book.updateYear = function(newYear){
    this.year = newYear;
}
book.updateYear(2024);
console.log(book);


// Activity 3: Nested Objects
// : Task 5: create a nested object representing a library with properties like name
//  and book (an array of book objects), and log the library object to the console.
const library = {
    name1: "local library",
    book: [
        {
            title: "frontend",
            author: "ashish",
            year: 2022
        },
        {
            title: "devOps",
            author: "rajat",
            year: 2019
        },
        {
            title: "backend",
            author: "shivam",
            year: 2023
        }
    ]
}
console.log(library);

// Task 6: access and log the name of the library and title of all books.
const info = library.name1
console.log("this is book name: ",info);

library.book.forEach((booksname)=>{
    console.log("books title: ",booksname.title)  
})


// Activity 4: The this Keyword
// • Task 7: Add a method to the newbook object that uses the this keyword to return a 
// string with the book's title and year, and log the result of calling this method.
const newbook = {
    title: "best in the world",
    author: "william",
    year: 2021,
}

newbook.bookInfo = function(){
    return `book title is ${this.title} and make in ${this.year}`
}
console.log(newbook.bookInfo());



// Activity 5: Object Iteration
// • Task 8: Use a for...in loop to iterate over the open the property of the oddbook
//      object and log each property and its value.
const oddbook = {
    title: "best in the world",
    author: "william",
    year: 2021,
}
for(const keys in oddbook){
    console.log(keys, oddbook[keys]);
}

// Task 9: use Object.keys and Object.vales method to log all the keys and values of 
//      the body object.
const oddbook1 = {
    title: "best in the world",
    author: "william",
    year: 2021,
}
Object.keys(oddbook1).forEach((keys)=>{
    console.log(keys);
})

Object.values(oddbook1).forEach((values)=>[
    console.log(values)
])

// Feature Request:
// 2: Lrary Object Siri : Create a scrpe that dernes a tay Objet containing an aray of bot objets and loes the dirarys detalts.
// 3. Object Iteration Script: Write a script that demonstrates iterating over an object's properties using for... in loop and Object. keys / Object. values .
// Achievement:
// By the end of these activities, students will:
// • Create and manipulate objects with properties and methods.
// • Understand and use the this keyword in object methods.
// • Work with nested objects and arrays of objects.
// • Iterate over an object's properties using loops and built-in methods.