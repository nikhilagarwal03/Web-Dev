console.log("Hello")
console.log("All about Loops Statements.")

let a = 15

// for loop
for (let i = 0; i < 100; i++) {
    console.log(a+i)
}

let obj = {
    name : "Rahul",
    role : "Businessman",
    networth : "500 Crores" 
}

// for in loop
for (const key in obj) {
    const element = obj[key];
    console.log(key,element)
}

// for of loop
for (const char of "Rahul") {
    console.log(char)
}

// while loop
// while (a<17) {
//     console.log(a)
//     a++
// }

// do while loop
do {
    console.log(a)
    a++
} while (a<19);