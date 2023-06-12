/*
3 Exercises for Chapter 3
*/


//----------------------------------Exercise 1: My own Math.min() ----------------------------------//
/*
Goal: Math.min returns the smallest argument. Write a program that takes two arguments and returns the minimum. 

Approach + Self-imposed Challenges: 
Function that returns the smallest of the two arguments. If statement to handle the situation if inputs are equal. 
Also need to add a check in case input value isn't a number.
Going to start off just subtracting one number from the other and determining if the result is a negative value 
Scenarios to consider:
- Both positive
- Both negative
- 1 negative (in either order)
- Both the same number
- Decimal values
- Extremes in values (included for each above category)
*/
//Code:

function returnMin(num1, num2){
  if (typeof num1 != 'number' || typeof num2 != 'number'){
    console.log('Invalid argument. Please only enter number values.');
    return
  }

  if(num1 == num2){
    console.log('Both arguments are the same number.'); 
  } else if ((num1 - num2) < 0) {
    console.log(num1 + ' is the smaller number');
    return num1
  } else if ((num2 - num1) < 0) {
    console.log(num2 + ' is the smaller number');
    return num2
  } else {
    console.log('Error. Inputs may not be a number');
  }
}
returnMin(3,'-100');
//-> Invalid argument. Please only enter number values.

/*
Each test category was manually tested to validate function. Will automate the testing once Selenium is up and running.
Below are arguments used for each of the categories:
Test values:
(10,5), (5,10), (1000,5), (5,1000)
(-10,-5), (-5,-10), (-1000,-5), (-5,-1000)
(10,-5), (-5,10), (-10,5), (5,-10), (1000,-5), (-5,1000), (-1000,5), (5,-1000)
(10,10), (1000, 1000), (-10,-10),(-1000, -1000)
(10.3,-5.5), (-5.5,10.3), (-10.3,5.5), (5.5,-10.3)
*/



//----------------------------------Exercise 2: Even or Odd Determination via Recursion----------------------------------//
/*
Goal: Use recursion to replace the '%' operator in determining if the value of a number is even or odd. 
The below definitions can be used to define even/odd:
- Zero is even
- One is odd
- For any other number 'N' is evenness is the same as N-2

Approach + Self-imposed Challenges:
Subtraction will be the main approach here. Essentially, we N-2 until we reach either 0 or 1. 0 and 1 will act as our baseline to determine if a number is even or odd
Baseline: if 'number == 0' it is even. if 'number == 1' it is odd. 
As before, will build in a statement to ensure the input values are actually numbers.
Will also be adding in a way to deal with negative numbers to avoid blowing the stack.
May explore adding in a way to deal with floats/decimals 
*/
//Code for Integer Even/Odd Determination:
function isEven(number){
  if (typeof number != 'number'){
    console.log('Invalid argument. Please only enter integer values.');
    return
  }
  
  if (number == 0){
    return 'even'
  } else if (number == 1 || number == -1){
    return 'odd'
  } else if (number > 0) {
    return isEven(number-2);
  } else {
    return isEven(number+2);
  }
}

console.log(isEven(75))
//-> odd
console.log(isEven(-75))
//-> odd

//----------------------------------Exercise 3: Bean Counting ----------------------------------//
/*
Goal: Write a program that intakes a 'base' string as the first argument, and a second string argument that will be the 'search' argument. The program should determine how many 
of the 'search' argument exist within the 'base' argument.
i.e func('AAA', 'A') -> 3, func('ABA', 'A') -> 2 

Approach + Self-imposed Challenges:
- Going to start by looping through for the index. Shouldn't be too bad
- Will edit the function to take in more than a single character for string2. This will make loop more complicated, and will likely have to slice
- Since we're bean counting, I want the EXACT string match. So 'A' != 'a' 
- Recursion doesn't immediately come to mind as a solution for this. May explore the approach anyways  
*/
//Code for bean counting on a string2 length == 1:
function countBeans(string1, string2){
  let count = 0;
  for(let x = 0; x < string1.length; x++) {
    if(string1[x] == string2){
      count++;
    } else {
      continue
    }
  }
 console.log(string2 + ` appears ${count} times within ` + string1)
 return count
}
countBeans('AABBCCDD', 'a')
//-> a appears 0 times within AABBCCDD
countBeans('AABBCCDD', 'A')
//-> A appears 2 times within AABBCCDD


//Code for bean counting on string2 with a variable length:
function countBeans(string1, string2){
  let count = 0;
  length2 = string2.length;
  for(let x = 0; x <= string1.length-length2; x++) {
    if(string1.slice(x,x+length2) == string2){
      count++;
      console.log(string1.slice(x,x+length2))
    } else {
      continue
    }
  }
 console.log(string2 + ` appears ${count} times within ` + string1)
 return count
}

countBeans('AAAABBghAAAhtrAlAANNAAA', 'AAA')
//->AAA appears 4 times within AAAABBghAAAhtrAlAANNAAA

//Interesting takeaway with this approach is if we're looking for 'AAA' within "AAAABBBBCCCC", we get that 'AAA' is present TWICE, which is technically true.
//If desired, the code could be re-written to ignore characters that have been "used up" and already counted.

