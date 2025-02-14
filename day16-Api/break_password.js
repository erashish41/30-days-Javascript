//// break the password

//// with only for loop

let shouldBreak = false;
let passwordNumber = "120";
let yourPassword = "";
for(let i=0; i<9; i++){
    for(let j=0; j<9; j++){
        for(let k=0; k<9; k++){
            let attempt = `${i}${j}${k}`;

            console.log(">>>>>>> current number >>>>>>>>>", attempt)
            if(attempt === passwordNumber){
                yourPassword = attempt;
                shouldBreak = true;
                console.log("your password is correct - ",yourPassword);
                break;   
            }
        }
        if(shouldBreak) break;
    }
    if(shouldBreak) break;
}

// with function
// function passwordUnlock(passwordNumber){
//     let yourPassword = "";

//     for(let i=0; i<10; i++){
//         for(let j=0; j<10; j++){
//             for(let k=0; k<10; k++){
//                 let attempts = `${i}${j}${k}`;
                
//                 if(attempts === passwordNumber){
//                     console.log("your password is correct - ",yourPassword);
//                     return attempts;
//                 }else{
//                     console.log("your password is wrong - ",yourPassword);
//                 }
                
//             }
//         }
//     }
//     return null;
// }
// let userInput = prompt("Enter any 3-digit number")
// let userResult = passwordUnlock(userInput);
// console.log(userResult);
