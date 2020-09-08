// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js
// Please read all questions thoroughly
// Psuedo coding is highly recommended

// --------------------1) Create a function that determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Farhenheit.
// Use the test variables provided below. Expected outcome: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

var temp1 = 35
var temp2 = 350
var temp3 = 212

//Create a function that determines if a temperature is ...
const boilingPoint = (temperature) => {
    // determines if temp is at boiling point
    if (temperature === 212){
        return `${temperature} is at boiling point`
    }
    // determines if temp is above boiling point
    else if (temperature > 212){
        return `${temperature} is above boiling point`
    
    // determines if temp is below boiling point}
    } 
    else if (temperature < 212){
        return `${temperature} is below boiling point`
    }
}
console.log(boilingPoint(temp1));
console.log(boilingPoint(temp2));
console.log(boilingPoint(temp3));



// --------------------2) Create a function that multiplies each number in the array by 5 using a for loop.
// Use the test variable provided below. Expected outcome: [15, 35, 0, 30, -45]

var myNumbers1 = [3, 7, 0, 6, -9]
// Create a function that multiplies each number in the array by 5
const multiplyBy5Loop = (array) => {
// create new array to push in new values
    let arrayMult5 = []
// iterate through array
    for (let i = 0; i < array.length; i++){
// multiply values of array by 5 and push into new array
       arrayMult5.push((array[i] *5))
       }
// return new array full of values
    return arrayMult5
}
console.log(multiplyBy5Loop(myNumbers1));


// --------------------3) Create a function that multiplies each number in the array by 5 using map.
// Use the test variable provided below. Expected outcome: [40, -35, 0, 30, 10]

var myNumbers2 = [8, -7, 0, 6, 2]

//Create a function that multiplies each number in the array
const multiplyBy5Map = (array) => {
//must iterate through each value in array
    for (let i = 0; i < array.length; i++){
// use method .map() to alter each value
       return array.map(value => {
// we want .map to multiply value by 5
            return value * 5
       })
    }
}
console.log(multiplyBy5Map(myNumbers2));




// --------------------4) Create a function that removes all the vowels from a string.
// Use the test variables provided below. Expected output: "HyThrLrnStdnt" "LvJvScrpt"

var stringWithVowels1 = "HeyThereLearnStudent"
var stringWithVowels2 = "ILoveJavaScript"

//Create a function that removes all the vowels from a string.
const noVowels = (string) =>{
// use .split to split string into array
// use .filter method through the array to filter out vowels
    return string.split("").filter(value => {
// return char as long as value is not upper or lowercase letter
        return value !== "a" && value !== "A" && value !== "e" && value !== "E" &&  value !=="i" && value !== "I" &&  value !=="o" && value !=="O" && value !== "u" && value !== "U"
// rejoin the array as a string
    }).join("")
}
console.log(noVowels(stringWithVowels1))
console.log(noVowels(stringWithVowels2))




// --------------------5) Copy/paste your code from #4. Refactor your code to include non-string edge cases. Inform your user that the variable passed into the vowel removal function is not a string.
// Use the test variables provided below. Expected output: "true is not a string" "42 is not a string"

var notAString1 = true
var notAString2 = 42

const noVowelsStringOnly = (string) => {
// must use if/else to determine course of action when logic is not a string
    if (typeof string === "string") {
        return string.split("").filter(value => {
            return value !== "a" && value !== "A" && value !== "e" && value !== "E" &&  value !=="i" && value !== "I" &&  value !=="o" && value !=="O" && value !== "u" && value !== "U"
        }).join("")
    }
// for anything that is not a string, return error message
    else{
        return `${string} is not a string`
    }
}
console.log(noVowelsStringOnly(notAString1));
console.log(noVowelsStringOnly(notAString2));






// --------------------6) Create a function that takes the toonimals array and returns an array with only the toon objects that are cats.
// Expected output: [ { name: "Stimpy", animal: "cat" }, { name: "Scratchy", animal: "cat" }, { name: "Felix", animal: "cat" } ]

var toonimals = [ { name: "Itchy", animal: "mouse" }, { name: "Stimpy", animal: "cat" }, { name: "Daffy", animal: "duck" }, { name: "Scratchy", animal: "cat" }, { name: "Ren", animal: "dog" }, { name: "Felix", animal: "cat" }]

// Create a function that takes the toonimals array
const catsOnly = (array) => {
// use .filter method
// return the value as long as the value.animal is cat
    return array.filter(value =>value.animal === "cat")
}
console.log(catsOnly(toonimals))


// --------------------7) Using the toonimals variable from #6, create a function that returns only the names of the non-cats.
// Expected output: "Itchy" "Daffy" "Ren"

// create a function that returns only the names of the non-cats
const nonCatNames = (array) => {
// create a variable to hold all filtered non-cats
    let nonCats = array.filter(value => {
        return value.animal !== "cat"
    })
// use map on the created variable to iterate through all non-cat values and only return the nonCat names
    return nonCats.map(value => {
        return value.name
// use .join to join array values into a string
    }).join(" ")
}
console.log(nonCatNames(toonimals))