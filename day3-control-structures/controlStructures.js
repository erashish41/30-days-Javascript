// C o n t r o l  S t r u c t u r e s

// Activity 1: If-Else Statements
// Task 1: Write a program to check if a number is positive, negative or zero and log the result to console
let num1 = 99;
function checkNumber(num1){
    if(num1 > 0){
        return `${num1} is positive`
    }else if(num1 < 0){
        return `${num1} is negative`
    }else{
        return `${num1} is zero`
    }
}
console.log(checkNumber(num1));

// Task 2: Wite a progran to check 1f a person is eligible to vote (age >= 18) and log the result to console
function voterAge(num2){
    if(num2 >= 18){
        return `${num2} eligible to vote`
    }else{
        return `${num2} not eligible to vote`
    }
}
console.log(voterAge(11));


// Activity 2: Nested If-Else Statements
// Task 3: Write a program to find the largest of three numbers using nested if-else statements.
function largeNumber(a, b, c){
    
    if(a > b){
        if(a > c){
            console.log("a is greater");
        }else{
            console.log("c is greater");
        }
    }else if(a < b){
        if(a < c){
            console.log("b is greater");
        }else{
            console.log("c is greater");
        }
    }
}
console.log(largeNumber(1,2,3));
// other method
function largeNumber(a1, b1, c1){
    let largest;
        if(a1 > b1){
            if(a1 > c1){
                largest = a1;
            }else{
                largest = c1;
            }
        }else if(a1 < b1){
            if(a1 < c1){
                largest = b1;
            }else{
                largest = c1;
            }
        }
        return largest
    }
    console.log(largeNumber(11,2,3));

// Activity 3: Switch Case
// Task 5: Write a program that uses a switch case to determine day of the week based on a number (1, 7) and log day name to console.
function weekDay(day){
    let dayName;

    switch(day){
        case 1 :
            dayName = "monday";
            break;
        case 2:
            dayName = "tuesday";
            break;
        case 3 :
            dayName = "wednesday";
            break;
        case 4 :
            dayName = "thrusday";
            break;
        case 5:
            dayName = "friday";
            break;
        case 6 :
            dayName = "saturday";
            break;
        case 7:
            dayName = "sunday";
            break;
        default:
            dayName = "invalid, please enter valid number between 1 to 7"
        
    }
    console.log("the day is: ", dayName);   
}
console.log(weekDay(4));


// Activity 4: Conditional (Ternary) Operator
// Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.
function ternaryNumber(num3){
    return (num3 % 2 == 0) ? "num is even" : "num is odd"
}
const hello = ternaryNumber(71);
console.log(hello);


// Activity 5: Combining Conditions
// Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.
function findLeapYear(year){
    if((year % 400 === 0) || (year % 2 ===0)  && (year % 100 !== 0)){
        return `${year} is a leap year.`;
    }else{
        return `${year} is not a leap year.`;
    } 
}
console.log(findLeapYear(1600));



// Feature Request:
// 1. Number Check Script: Write a script that checks if a number is positive, negative, or zero using if-else statements and logs the result.
// 2. Voting Eligibility Script: Create a script to check if a person is eligible to vote based on their age and log the result.
// 3. Day of the Week Script: Write a script that uses a switch case to determine the day of the week based on a number (1-7) and logs the day name.
// 4. Grade Assignment Script: Create a script that uses a switch case to assign a grade based on a score and logs the grade.
// 5. Leap Year Check Script: Write a script that checks if a year is a leap year using multiple conditions and logs the result.
// Achievement:
// By the end of these activities, students will:
// • Implement and understand basic if-else control flow.
// • Use nested if-else statements to handle multiple conditions.
// • Utilize switch cases for control flow based on specific values.
// • Apply the ternary operator for concise condition checking.
// • Combine multiple conditions to solve more complex problems.