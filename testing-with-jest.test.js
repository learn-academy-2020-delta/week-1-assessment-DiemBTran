// ASSESSMENT 1: Testing practical questions

//const { describe } = require("yargs")
//const { test } = require("picomatch")

// $ yarn add jest

// Practice red-green refactor development
// $ yarn jest


// --------------------1a) Create a test for a function called addThemUp that takes two numbers as arguments and returns the sum.

describe("addThemUp", () => {
    test("returns a string that takes two numbers as arguments and returns the sum", () => {
        expect(addThemUp(3, 5)).toEqual(8)
    })
})



// --------------------1b) See the test fail. THEN write the code to make the test pass.

const addThemUp = (num1, num2) => {
    return num1 + num2
}


// --------------------2a) Create a test for a function called triangleArea that takes the base and the height of a triange and returns the area. The area of a triange is the base times the height divided by two.

describe("triangleArea", () => {
    test("takes the base and height of a triangle and returns its area", () => {
        expect(triangleArea(7, 10)).toEqual(35)
    })
})



// --------------------2b) See the test fail. THEN write the code to make the test pass.

const triangleArea = (baseTriangle, heightTriangle) => {
    return (baseTriangle * heightTriangle) / 2
}