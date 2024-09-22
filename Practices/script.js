// Declaring Regular Function
function dance() {
  console.log("Dancing Using Regular Function!");
}

// Declaring Regular Arrow Function
const danceArrow1 = () => {
  console.log("Dancing Using Regular Arrow Function!")
}
// Declaring Shorthand Arrow Function
const danceArrow2 = ()=> console.log("Dancing Using Arrow Shorthand Function!")

//calling Regular Function
dance()

// calling regular arrow function
danceArrow1()

 // calling danceArrow function
danceArrow2()

// regular function with callback
function singing(callback) {
  console.log("Singing using Regular Function With Callback ")
  callback()
  
}

//Regular Arrow Function With Callback
const singingArrow1 = (callback) => {
 console.log("Singing using Regular Arrow Function With Callback")
 callback()   
}

// Cant call the callback()  because this one line only shorthand version
// dunno if possible to call it using shorthand
//const singingArrow2 = (callback)=> console.log("Singing Using Arrow Shorthand Function!")


// called singing regular function using regular function dance regular function as an argument
singing(dance)

// called singing Regular arrow function using regular arrow function dance as an argument
singingArrow1(danceArrow1)

//
//singingArrow2(danceArrow2);

console.log("Hello World")
// Testing Github dekstop