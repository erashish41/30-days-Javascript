// // Promise and Async Await


// Promise:
// It is an object in JS
// It is solution to callback hell

// Tasks/Activities:
// Activity 1: Understanding Promises
// Task 1 : Create a promise that resolves with a message after a 2 second timeout and log the message
let resolvePromise = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve("this is resolved message after 2 second")
    }, 2000)
})
resolvePromise
.then((message) =>{
    console.log(message); 
})
.catch((error) =>{
    console.log("something went wrong ", error);
})


// : Task 2: Create a promise that reject with a message after a 2 second timeout and handle the error with .catch()
let rejectPromise = new Promise((reject) =>{
    setTimeout(() => {
        reject("this is reject message after 2 second")
    }, 2000) 
}) 
rejectPromise
.then((message) => {
    console.log(message);
})
.catch((error) =>{
    console.log("code error, please check your code again", error);
    
})


// Activity 2: Chaining Promises
// • Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.
function sequenceFetchingData(step){
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve(`Fetch data for ${step}`)
        })
    })
}
sequenceFetchingData(1)
    .then((message1) => {
        console.log(message1);
        return sequenceFetchingData(2);
    })
    .then((message2)  => {
        console.log(message2);
        return sequenceFetchingData(3);
    })
    .then((message3) =>{
        console.log(message3);
    })
    .catch((error) =>{
        console.log("an error occured", error);
        
    })


// Activity 3: Using Async/Await
// Task 4: Write an async function that waits for a promise to resolve and log message.
function resolveAfterTwoSecond(){
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve("Promise resolved after 2 second")
        }, 2000)
    })
}

// note: async function always return Promise
async function asyncAwaitWithPromise() {
    console.log("waiting for the promise to resolve..");
    const message = await resolveAfterTwoSecond();
    console.log(message);
}
asyncAwaitWithPromise()

// Activity 4: Fetching Data from an API
// Task 7: Use the fetch APito get data from a public Al and log the response data to the console using arom /await.
// Activity 5: Concurrent Promises
// • Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.
// • Task 9: Use Promise, race to log the value of the first promise that resolves among multiple promises.
// Feature Request:
// 1. Promise Creation Script: Write a script that demonstrates creating and handling promises, including both resolved and rejected states.
// 2. Promise Chaining Script: Create a script that chains multiple promises and logs messages in a specific sequence.
// 3. Async/Await Script: Write a script that uses async/await to handle promises and includes error handling with try-catch.
// 4. API Fetch Script: Create a script that fetches data from a public API using both promises and async/await, and logs the response data.
// 5. Concurrent Promises Script: Write a script that uses Promise.all and Promise. race to handle multiple promises concurrently and logs the results.
// Achievement:
// By the end of these activities, students will:
// • Understand and create promises, including handling resolved and rejected states.
// • Chain multiple promises to perform sequential asynchronous operations.
// • Use async/await to handle asynchronous code more readably.
// • Fetch data from public APls using both promises and async/await.
// • Manage multiple concurrent promises using Promise.all and Promise.race.