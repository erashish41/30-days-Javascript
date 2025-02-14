// // step 1. fetch api 

// function fetchProducts(){
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
// fetchProducts();


// // step 2. fetch api
// async function fetchProducts(id){
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
// fetchProducts(2)


// all products details
// let productsData = [];
// const fetchProducts = () => {
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
// fetchProducts()



function getByCategory(category) {
    const categoryResult = [];
    for(let i=0; i<productsData.length; i++){
        let categoryInfo = productsData[i];
        // console.log("all products -- ", productsData[i].category);
        if(categoryInfo.category === category){
            categoryResult.push(categoryInfo)
        }
    }
    return categoryResult;
}

function getByBrand(brand){
    const brandResult = [];
    for(let i=0; i<productsData.length; i++){
        let brandInfo = productsData[i];
        if(brandInfo.brand === brand){
            brandResult.push(brandInfo);
        }
    }
    return brandResult;
}

function getByStock(stock){
    const stockResult = [];
    for(let i=0; i<productsData.length; i++){
        let stockInfo = productsData[i];
        if(stockInfo.stock >= stock){
            stockResult.push(stockInfo)
        }
    }
    return stockResult;
}

function getByAvailabilityStatus(stock){
    const availabilityResult = [];
    for(let i=0; i<productsData.length; i++){
        if(productsData[i].availabilityStatus === stock){
            availabilityResult.push(productsData[i])
        }
    }
    return availabilityResult;
}

function getByDiscountPercentage(number){
    const discountResult = [];
    for(let i=0; i<productsData.length; i++){
        if(productsData[i].discountPercentage <=  number){
            discountResult.push(productsData[i])
        }
    }
    return discountResult;
}

let productsData = [];
const fetchProducts = () => {
    const apiUrl = "https://dummyjson.com/products";
    fetch(apiUrl)
        .then((response) => {
            // console.log('raw response -- ',response);
            return response.json();

        }).then((data) => {
            // console.log('raw data -- ', data);
            productsData = data.products;
            // console.log('all products data -- ', productsData);

            for(let i=0; i<productsData.length; i++){
                // console.log(productsData[i].brand);
            }

            const categoryDisplay = getByCategory("groceries");
            console.log("category to display ----- ",categoryDisplay);

            const brandDisplay = getByBrand("Essence");
            // console.log("brand to display -- ",brandDisplay);

            const stockDisplay = getByStock(70);
            console.log("stock to display -- ", stockDisplay);
            
            const availabilityDisplay = getByAvailabilityStatus("In Stock");
            console.log("availability status are -- ", availabilityDisplay);

            const randomDiscount = Math.floor(Math.random() * 10);
            console.log("random discount to filter by -- ", randomDiscount);
            
            const discountDisplay = getByDiscountPercentage(randomDiscount);
            console.log("discount to display -- ", discountDisplay);

            
            
        })
        .catch((error) => {
            console.log("error occurred -- ", error.message);
        })
}


fetchProducts();
