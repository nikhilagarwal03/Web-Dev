console.log("Hello")
console.log("All about Conditional Statements.")

let age = 87
let grace = 2
//arthematic operators 
console.log(age + grace)
console.log(age - grace)
console.log(age * grace)
console.log(age / grace)
console.log(age ** grace) // power
console.log(age % grace) // remainder

// example for assignment operator
age += grace
console.log(age)

// if-else Statement 
if (age>18){ // ">" is example of comparision operator
    console.log("You can Drive...")
}
else{
    console.log("You cannot Drive...")
}

// if-else-if Statement 
if (age>18 && age<80){ //&& is example of logical operator
    console.log("You can Drive...")
}
else if (age>80){
    console.log("You are too old for Drive...")
}
else{
    console.log("You cannot Drive...")
}

// Usecase of Terneray Operator(?)
a = 5
b = 7
console.log(a+b)
c = a>b ? (a-b) : (b-a)
console.log(c)