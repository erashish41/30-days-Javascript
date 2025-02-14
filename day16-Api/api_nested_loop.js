// array of loop -> single loop
// Nested-loop (array of objects) -> print reviews from JSON data. 
// Nested array

// How to add flat nested array 



function productsDetails(){
    return fetch("https://dummyjson.com/products")
    .then(function(response){
        return response.json();
    }).then(function(data){
        return data.products;
    })
}
productsDetails().then(function(allDetailsProducts){
    // console.log(allDetailsProducts);

    for(let i=0; i<allDetailsProducts.length; i++){
        for(let j=0; j<allDetailsProducts[i].reviews.length; j++){
            // console.log(allDetailsProducts[i].reviews[j]);
            // console.log(allDetailsProducts[i].reviews[j].date);

            if(allDetailsProducts[i].reviews[j].reviewerName.toLowerCase()){
                console.log("reviewer name is - ",allDetailsProducts[i].reviews[j].reviewerName.toLowerCase());
            }
        }
    }
})