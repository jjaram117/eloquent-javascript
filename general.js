//General Notes from 'Eloquent Javascript'

// 
//'%' is the remainder function (aka the 'modulo')
//e.g. 314 % 100 results in 14


//'Template Literals' (the backticks that look like this: ``) act as quotes but have a few tricks:
//e.g.: 
console.log(`half of 100 is ${100/2}`)
//The result is computed and converted into a string at the given position (potential for use with variables)


//Determining the type of value of a variable/value:
console.log(typeof 'x')
console.log(typeof 117)
//Straightforward


//Only JS value not equal to itself if NaN (because NaN is the result of a nonsensical computation) 
console.log(NaN == NaN)
//--> false


//Logical Operator syntax for and, or, not:
console.log(true && false)
//--> false
console.log(true || false)
//--> true
console.log(!true)
//--> false (flips the boolean given to it)


//Ternary operator ?  (used these a lot when generating ZPL):
console.log(true ? 1:2)
//--> 1
console.log(false ? 1:2)
//--> 2


//Great, JS accepts things like "5"+ 1 --> 51 due to 'type coercion' in which one of the values is converted to the other. 
//Especially confusing when using == operator cause it'll attempt to convert them
//The following operators can be used to PRECISELY compare two values without type coersion: ===  and !==


//Tricks when using && and ||:
//These often convert the value on the left side into a boolean to determine what to do. BUT depending on the operator and the result, 
//they may return the original left seide value OR right-side value.
// || will return the value on the left if it can be converted to True. Otherwise, it'll return what's on the right 
console.log(null || "user")
//--> user (DID convert null to True)
console.log("agnes" || "user")
//--> agnes (DID convert "agnes" to True)

//0, NaN, and empty strings count as false, everything else counts as true.
//I.e.:
console.log(0 || "-1")
//--> -1 (did NOT convert 0 to True)
console.log('' || "!?")
//--> !? (did NOT convert '' to True) 

//&& works the same way, but in reverse. When the left CAN be converted to false it returns that value, otherwise it returns what's 
//on the right
//I.e.:
console.log(0 && "-1")
//--> 0 (did convert 0 to false)
console.log('a' && "!?")
//--> !? (did NOT convert 'a' to false) 

//PURPOSE: A clever way of potentially setting a default value if there's a possibility of a processed variable resulting in 
//0, NaN, or an empty string
  
  
