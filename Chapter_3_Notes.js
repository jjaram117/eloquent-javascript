// Notes from 'Eloquent Javascript' - Chapter 3

//----------------------------------Chapter 3: Functions----------------------------------//

//There's a different way to set up functions compared to what I've been using so far. "Function Statements" use the format:
//const square = function (number) { };

const square = function(x){
  return x * x;
};
console.log(square(11));
//-> 121
//Simple. Just a little different than how I've usually been doing functions. Requires a semi-colon at the end of the function

//"Lexical Scoping":
//The visiblity of variables depends on where the variables are assigned. Global variables are everywhere, within functions they're local, 
//and within functions within functions they're still local only to the innermost function to which they're assigned. 

//It's also possible to reassign functions within themselves based on conditions, such as below:
let launchMissles = function(){
  missleSystem.launch("now");
};
if(safeMode){
  launchMissiles = function() {/*do nothing*/};
}
//^^This is ONLY doable if a function is defined as a value, the "const square = function (number) { };" format. NOT when it's created using 
//Declaration notation

//Declaration Notation:
function square(x){
  return x * x;
}
//How I usually do functions. What's cool about this method is that we can create the function ANYWHERE in the script and it'll still
//be called to the top. No requirement to put your functions at the top of the script 


//"Arrow Notation":
//'=>' can also be used to define functions (new to me). Example:
const power = (base, exponent) => {
  let result = 1;
  for (let cound = 0; count < exponent; count++){
    result *= base;
  }
  return result;
}
//Basically we're just not using the word "function"
//Lets us shorten functions with single parameters:
constant square1 = (x) => {return x * x; }; //Can be re-written as
const square2 = x => x * x; // no parenthesis, no need for return within brackets. Just give it the variable and what the output should be. 

//If function has no paramter inputs, it just retruns empty parenthesis
const horn = () => {
  console.log('toot');
};
//->


//The Call Stack mechanism
//The place where computers store of the context of what 'level' they're currently at when executing a functions. This way they can keep
//track of where they are and what other functions fall within the current Call Stack level. 
//Every time a function is run, computers add that to the top of the Call Stack.
//Call Stacks require system memory. The more the stack grows, the more memory is allocated, increasing the risk of 'blowing the stack'

//Author's a real funny guy
function chicken(){
  return egg();
}
function egg(){
  return chicken();
}

console.log(chicken() + " came first")
//-> stack gets blown. 


//Optional Arguments
//The below code is functional because JS is a very open-minded and flexible PL (for better and worse)
const square = function(x){
  return x * x;
};
console.log(square(11, true, 'hedgehog')); //Extra arguments are ignored. If too few arguments are passed, they're assigned 'undefined'
//-> 121

//Gives us the flexibility to add conditionals based on number of inputs 
function minus(a,b){
  if (b == undefined){
    return -a;
  }
  else {
    return a - b;
  }
}
console.log(minus(20,10));
//-> 10
console.log(minus(20));
//-> -20

//We can also set defaults for functions with less than the desired number of arguments
function power(base, exponent = 2){
  let result = 1;
  for (let could = 0; count < exponent; count++){
    result *= base; 
  }
  return result;
}

console.log(power(4));
//-> 16
console.log(power(2,6));
//-> 64

//This one's a little odd to wrap my head around:
function multiplier(factor){
  return number => number * factor;
  console.log(factor)
}
let twice = multiplier(3);
console.log(twice(6));
//->18
//Starting near the bottom, 'twice' is a variable, not a function, but we're calling it as a function. And the '6' gets passed into the 
//'multiplier' function completes the internal multiplication
//When 'multiplier' is called we assign '2' to factor, but the ENTIRE function value is then returned and stored in 'twice', and when 
//'twice' is called it multiples the argument by 2. 
//Super weird and I still don't get the 'number => number * factor', but I'm fuzzily getting there. 


//Resursion
//





