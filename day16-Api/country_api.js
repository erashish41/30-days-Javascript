// show the data from country API

let getAllCountryData = [];
function countryApi(){
    return fetch("https://restcountries.com/v3.1/all")
    .then(function(response){
        // console.log(response);
        return response.json();
    }).then(function(data){
        // console.log("raw data - ",data);
        getAllCountryData = data
        console.log("<<<<<<< country data >>>>>>>>> ",getAllCountryData);
        return getAllCountryData;
    })
    .catch(function(error){
        console.log("Error occurred please check your code - ", error.message);
    })
}
/* countryApi().then(function(getAllCountryData){
    // console.log("<<<<<<<<getAllCountryData all country >>>>>>> ",getAllCountryData);
    for(let i=0; i<getAllCountryData.length; i++){
        // console.log(getAllCountryData[i]);
        let newCountryData = [];
        let countryName = getAllCountryData[i];
        if(countryName.name){
            // console.log(getAllCountryData[i].name);
            newCountryData = countryName.name["common"];
            console.log("-------", newCountryData);
        }
    }
})
*/

countryApi().then(function(){
    const result = getCountryName(getAllCountryData, "Belize");
    console.log("hhhhhhh", result);
    
})

function getCountryName(anyCountry){
    let newCountryData = [];
    for(let i=0; i<getAllCountryData.length; i++){
        let countryName = getAllCountryData[i];
        if(countryName.name.common === anyCountry){
            newCountryData.push(countryName)
        }
    }
    return newCountryData;
}

