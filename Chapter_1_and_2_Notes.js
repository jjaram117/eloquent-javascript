//General Notes from 'Eloquent Javascript' - Chapter 1 and 2 Notes

//----------------------------------Chapter 1: General Data Types----------------------------------//
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
  

//----------------------------------Chapter 2: Variables, Conditionals, loops, and misc built-in commands. Cute----------------------------------//
//Talking about variables now. The book likes to compare variables to 'tentacles' rather than 'containers'
//Weird, but I get it
//multiple variables can be established at once
let one = 1, two = 2;


//Ways to establish variables: let, var, const
//'var' is how we'd do it pre 2015 JS. Very similar to 'let' but with some light differences. Will discuss these later
//'const' = constant. Defines a constant binding, points to the same value for as long as it lives


//Number() <- the method of converting to a number data type. 


//If statements, my favorite:
let theNumber = Number(prompt("Enter a number"));
if (!Number.isNaN(theNumber)) {
  console.log("Your number is " + theNumber);
}
//outputs the entered number. What matters to me is the '!Number.isNaN()'. This will reject any input that isn't actually a number, neat. 

//One-liner if statements don't HAVE to have the parentheses, but I'm gonna keep them in. I.e.:
if (1 + 1 == 2) console.log("yes, this is true")
//Also looked it up, and it appears JS doesn't support nor have an equivalent to Pythons list comprehension

//If-else statement:
let let theNumber = Number(prompt("Enter a number"));
if (!Number.isNaN(theNumber)){
  console.log("Your number is " + theNumber);
} else {
  console.log('please input a number, not a ' + typeof theNumber)
}


//While Loops:
let number = 0;
while (number <= 12) {
  console.log(number);
  number += 2;
}
//--> outputs even numbers 0 to 12


//Do Loops:
//Simliar to While loops, except that these always execute AT LEAST once. They only check whether they should continue executing after
//the first iteration is complete
let yourName;
do {
  yourName = prompt("Who are you?");
} while (!yourName);
console.log(yourName);
//Simple little loop that expects an input. yourName is set to empty (nothing binding to it) and the Do loop will continue to prompt a non-
//empty entry until one is provided. The !yourname converts the value to a boolean, and since "" is False, the while loop continues until a 
//valid entry converts it to True


//For Loops:
for (let number = 0; number <= 12; number = number + 2) {
  console.log(number);
}
//Interesting. The state variables are all listed in the initial setup. We created the initial variable, assigned how long it should run, 
//and what to increment by, all in a single line -> Initialize, Check, Update.


//break statements
for (let current = 20; ; current = current + 1){
  if (current % 7 == 0) {
    console.log(current)
    break
  }
}
//--> 21
//^^Find the first number greater than 20 that is divisible by 7 
//'continue' is similar to 'break', though it just stops the current interation process and proceeds onto the next one

//I was also able to write it using a while loop. 
let current = 20
while (current % 7 != 0){
  current += 1;
  console.log(current);
}
//--> 21


//Lots of options for shortening variable updates:
counter = counter + 1; //can be re-written as:
counter += 1;
counter++;
//Can also do 
counter--;
counter *= 2 //doubles the result
//etc


//Switches and Cases
switch (prompt("What's the weather like today?").toLowerCase()) {
  case "rainy":
    console.log("You should bring an umbrella.");
    break;
  case "sunny":
    console.log("You'll be fine.");
  case "cloudy":
    console.log("No sunglasses necessary!");
    break;
  default:
    console.log("An unknown weather type was entered");
    break;
}
/*
Notice how the 'sunny' case doesn't have a break. This caused the program to move onto the next case when I tested it, which resulted in 2 
outputs. Need to be careful on those, BUT it also give an opportunity to share code between the cases.
Will also be keeping track of the syntax. Appears to be a useful alternative to if statements
*/







