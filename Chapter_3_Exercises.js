/*
3 Exercises for Chapter 3
*/


//----------------------------------Exercise 1: My own Math.min() ----------------------------------//
/*
Goal: Math.min returns the smallest argument. Write a program that takes two arguments and returns the minimum. 

Approach: 
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


//----------------------------------Exercise 2: ----------------------------------//
/*
Goal: 

Approach:
*/
//Code:



//----------------------------------Exercise 3: ----------------------------------//
/*
Goal: 

Approach:
*/
//Code:
