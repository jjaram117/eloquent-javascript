/*
There are 3 simple exercises for Chapter 2. I will be attempting to find multiple solutions for each one.
I used the built-in JavaScript interpreter at https://eloquentjavascript.net/ to test and verify these small challenges
*/

//----------------------------------Exercise 1: A Simple Triangle----------------------------------//
//Goal: write a loop that outputs the following triangle:

/*
#
##
###
####
#####
######
#######
*/

//----------Method #1: For Loop
for (let symbol = "#"; symbol.length <=7; symbol = symbol + "#") {
  console.log(symbol)
}
// --> 
/*
#
##
###
####
#####
######
#######
*/
//Success!

//----------Method #2: While Loop
let symbol = "#";
while (symbol.length <= 7) {
  console.log(symbol)
  symbol = symbol + "#"
}
// --> 
/*
#
##
###
####
#####
######
#######
*/
//Success!
//The loop termination condition can also be changed for each to expand upon the base of this "right triangle"

//----------Method #3: Do Loop

let symbol = "";
do {
  symbol = symbol + "#"
  console.log(symbol)
} while(symbol.length <= 6);
// --> 
/*
#
##
###
####
#####
######
#######
*/
//Success!

/*
Interesting note, this was my intial results were: 
##
###
####
#####
######
#######
########

and 

#########

Do loops are new to me, so I forgot to consider that they ALWAYS execute one iteration before checking if they should continue.
Due to that first iteration, one solution is to initialize 'symbol' as an empty string, and reduce the while condition to 6 to get the
desired output. 
*/


//----------Method #EX 1: Creating an equilateral triangle via While loop
//I.e.:
/*
    #
   ###
  #####
 #######
#########
*/

let triangleHeight = prompt("How many lines tall would you like your Triangle?");
let counter = 1;
let symbol = '#';

while (symbol.length <= triangleHeight){
  symbol = symbol + "#"
  counter++
  for (){
    symbol = " " + symbol
    symbol = symbol + " "
  }
} 

//#spaces before/after per line = triangleHeight


for (let symbol = '#'; symbol.length <= triangleHeight; symbol = symbol + "#") {
  console.log(symbol)
  counter++
}

/*
Techincal requirements:
Need to N spaces before and after each symbol, depending on the current line compared to total lines.
Need a way to calculate how many are necessary. Will likely need a counter variable as well to track current line/interation
Some way to "translate" counter into spaces hmmm. Nested for loop?

Approach: form the ### characters first, then add in the spaces per line.  
*/


