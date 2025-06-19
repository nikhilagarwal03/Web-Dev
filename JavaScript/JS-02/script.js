console.log("Hello")

// var = variable 
// variable is case-sensitive
// variable cannot start with number
var a = 5
a = a + 9
var b = 3
var c = "Javascript"

console.log(a + b + " " + c)

console.log(typeof a,typeof b,typeof c)

// const = constant 
// const has a fixed value
const z = 35
console.log(z)

// usecase of "let"
let value = 45
console.log(value) //returns 45
{
    let value = 54
    console.log(value) //returns 54 
}
console.log(value) // again returns 45 

// Primitive data Types in Javascript
let d = 23
let e = "fkh"
let f = undefined
let g = null
let h = 45.9348
let i = true
console.log(d,e,f,g,h,i)
console.log(typeof d,typeof e,typeof f,typeof g,typeof h,typeof i)

// objects - key-value pairs in Javacsript
const o ={
    "name" : "Nikhil",
    'age' : 23
}
console.log(o)
o.salary = "100 crores"
console.log(o)