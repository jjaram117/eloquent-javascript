/*
There are 3 simple exercises for Chapter 2. I will be attempting to find multiple solutions for each one.
I used the built-in JavaScript interpreter at https://eloquentjavascript.net/ to test and verify these small challenges
*/

//----------------------------------Exercise 1: A Simple Triangle----------------------------------//
/*
Goal: write a loop that outputs the following triangle:
*/

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


//----------Method #EX 1: Creating an 'equilateral' triangle rather than a 'right' triangle
//I.e.:
/*
    #
   ###
  #####
 #######
#########
*/
let triangleHeight = 5; //How 'tall' we want our triangle to be
let triangleLayer = 1; //what layer of the triangle we're currently on

while (triangleLayer <= triangleHeight){ //while loop iterates over each triangle layer
  let symbol = "#";
  let spacer = "";

  //This first for-loop iterates at the current layer to determine how many #'s should populate the current layer. 
  //Calculation is based on the simple model that every additional triangle layer adds 2 #'s at the given layer (2*triangleLayer - 1) 
  //This also gurantees that a triangleHeight of 1 results in only 1 #
  for (; symbol.length < (2*triangleLayer - 1); symbol = symbol + "#") { 
  }
  
  //This second for-loop determine how many spaces are necessary at the current layer, based on the current layer webeing caluclated and
  //the total height of the triangle. The final layer will never require any spaces. The calculation does go to -1 at the final stage, but 
  //this hasn't cause any noticeable issues.
  for (; spacer.length <= (triangleHeight-triangleLayer-1); spacer = spacer + " "){
  }
  
  symbol = spacer + symbol;
  triangleLayer += 1;
  console.log(symbol); //Prints the triangle to the console
}

/*
Details and thoughts while working through this problem:

Techincal requirements:
- Need to add N spaces before each symbol, depending on the current layer compared to total number of layers in the triangle. Need a way
to calculate how many spaces are necessary. 
- Will likely need a counter variable to track current layer/interation

Design Approach: 
- Form the current layer's ### (octothorp) characters first, then add concatenate the necessary number of spacers for the given layer.
- This way the process is split into 2 distinct sections as opposed to concatenating all in a single for loop (which should still be possible)

Notes:
- The triangle isn't being saved anywhere, the variables just keep getting rewritten and printed to the console. This saves on memory, but 
makes it impossible to make changes to the triangle (not that that's necessary)
*/


//----------------------------------Exercise 2: FizzBuzz----------------------------------//
/*
Goal: Write a program that prints all the numbers from 1 to 100, with 2 exceptions:
- Print "Fizz" for any number divisible by 3
- Print "Buzz" for any number divisible by 5 (and not 3)
- print "FizzBuzz" for any number divisible by both 3 and 5

Design Approach: 
- Series of if statements that determine the following conditions:
  - Is the number divisible by both 3 and 5?
  - Is the number divisible by 5 not 3?
  - Is the number divisible by 3?
- Depending on the answer, we print the corresponding FizzBuzz word rather than the number  
*/

let currNum = 1;
while (currNum <= 50) {
  if (currNum % 3 == 0 && currNum % 5 == 0) {
    console.log('FizzBuzz');
  } else if (currNum % 3 == 0) {
    console.log('Fizz');
  } else if (currNum % 5 == 0) {
     console.log('Buzz');
  } else {
     console.log(currNum);
  }
  currNum += 1; 
}
//--> Success!

/*
Notes:
The output is large so i didn't post it above, but the spot-check was successful. 
The program is behaving as desired based on the given conditions, but my next question is HOW do we know that it always works? 

My first thought is to develop a comparison output; an array or list with the expected outputs. That way, the putput of my program can 
be directly compared with a control. Issue is getting that control. It'd have to either be done manually, or with another program that 
was successfuly tested (chicken and egg).

Another solution is to create a separate program where an input is processed and returns the appropriate result. 
I.e. the number 69 is input and the output is "Fizz". This program would be far easier to test as it's single input - single output 
This is the method I used, and the code is included below.
*/



//----------Comparison method: FizzBuzz single input - single output
let currNum = prompt('Which number would you like to verify?');
if (Math.floor(currNum) == currNum && !isNaN(currNum)) {
  if (currNum % 3 == 0 && currNum % 5 == 0) {
    console.log('The expected output should be: ' + 'FizzBuzz');
  } else if (currNum % 3 == 0) {
    console.log('The expected output should be: ' + 'Fizz');
  } else if (currNum % 5 == 0) {
    console.log('The expected output should be: ' + 'Buzz');
  } else {
    console.log('The expected output should be: ' + currNum);
  }
} else {
  console.log('You did not enter a number. Please try again and enter a whole number (integer)')
}



//----------------------------------Exercise 3: Variable Chessboards----------------------------------//
/*
Goal: Create a program that creates a string representing an 8x8 chessboard, with the chessboard spots represented by either a " " or an "#"
I.e.:
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
Also, edit your program so a chessboard of any size can be made (the above is size = 8)

Design Approach:
- Only 2 patterns exist, so first I develop both patterns
- Next, I loop as necessary to concatenate the patterns and the \n characters as into a single string
- Regardless of board size, the "top-left" will always start with symbol1
*/

function makePattern (symbol1, symbol2, size){
  pattern = "";
  while (pattern.length <= size) {
    pattern = pattern + symbol1;
    pattern = pattern + symbol2;    
  }

  if (pattern.length > size){
    pattern = pattern.substring(0, pattern.length-(pattern.length - size));
  } else {
      console.log("Nothing to Trim" );
  } 
  return pattern
}

function assembleBoard (pattern1, pattern2, size){
  let completeBoard = "";
  let count = 0;
  if (size % 2 == 0){
    for (; count < (size/2); completeBoard = completeBoard + pattern1 + "\n" + pattern2 + "\n"){
      count += 1;
    } 
  } else {
    for (; count < ((size+1)/2); completeBoard = completeBoard + pattern1 + "\n" + pattern2 + "\n"){
      count += 1;
    }
    completeBoard = completeBoard.substring(0, completeBoard.length-(size+1));
  }
  return completeBoard;

}

let size = 8;
let symbol1 = "_";
let symbol2 = "#";


pattern1 = makePattern (symbol1, symbol2, size);
pattern2 = makePattern (symbol2, symbol1, size);

completeBoard = assembleBoard (pattern1, pattern2, size);

console.log(completeBoard);




/* 
Notes:
'function makePattern()'
 - Takes both symbols and the 'size' as arguments and generates a pattern based on the 'size'. 
 - If 'size' is an odd number the pattern concatenates one too many of 'symbol2', therefore, the approach is to trim the last bits of the 
 pattern that are unecessary.  
 - Executed twice with reverse order of 'symbol1' and 'symbol2' to generate the 2 patterns used to generate the board

'function assembleBoard()'
- Intakes the two patterns and alternates between to assemble the board
- The number of times each pattern is utilized depends on whether 'size' is even or odd. 
  - When 'size' = odd, 'pattern1' is utilized 1 more time than 'pattern2'
  - When 'size' = even, both 'pattern1' and 'pattern2' are utilized the same amount
- Similar to 'makePattern()', a loop is used to assemble the board and implements '\n' where appropriate, and if odd, trimming is used 
to remove the unecessary 'pattern2' iteration that was concatenated 
- Function could certainly be re-written to reduce the for-loop code that's used twice
- An additinal '\n' also exists at the very end of the 'completedBoard' string, but it has no impact in this scenario 


Further 'assembleBoard()' Notes: 
Approach 1 - concatenate patterns and '\n', trim the undesired strings. Issue: Additional concatenations occur based on "size" variable at
rate of 2*x-2. Requires LOTS of trimming (nearly twice the desired vertical size).

Approach 2 - Calculate how many of each pattern are necessary based on 'size' variable. Utlilize for loops to assemble final string. This was 
the final approach that was used. 
*/




