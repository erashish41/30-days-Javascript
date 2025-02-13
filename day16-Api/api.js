// // step 1. fetch api 

// function fetchPoducts(){
//     const url = "https://dummyjson.com/products";
//     fetch(url)
//         .then((response) => {
//             return response.json();
//         })
//         .then((data) => {
//             console.log(data);
            
//         })
//         .catch((error) => {
//             console.log("error occurred", error)
//         })
// }
// fetchPoducts();


// // step 2. fetch api
// async function fetchPoducts(id){
//     try{
//         const response = await fetch("https://dummyjson.com/products");
//         if(!response.ok){
//             throw new Error("HTTP error");
//         }
//         const data = await response.json();

//         for(let i=0; i<data.products.length; i++){
//             // console.log(data.products[i].category);
//             if(data.products[i].id === id){
//                 console.log(data.products[i].description);
//             }
//         }
        
//     }catch(error){
//         console.log("error occurred", error.message);
//     }
// }
// fetchPoducts(2)


// all products details
// let productsData = [];
// const fetchPoducts = () => {
//     const apiUrl = "https://dummyjson.com/products";
//     fetch(apiUrl)
//         .then((response) => {
//             return response.json()}
//         ).then((data) => {
//             productsData = data.products;
//             console.log(productsData);
//         }).catch((error) => {
//             console.log("error occurred", error.message);
//         })
// }
// fetchPoducts()

let productsData = [];
const fetchPoducts = () => {
    const apiUrl = "https://dummyjson.com/products";
    fetch(apiUrl)
        .then((response) => {
            console.log('raw response -- ',response);
            return response.json();

        }).then((data) => {
            console.log('raw data -- ', data);
            productsData = data.products;
            console.log('all products data -- ', productsData);
        })
        .catch((error) => {
            console.log("error occurred", error.message);
        })
}
fetchPoducts();