// Looping a triangle
// Write a loop that makes seven call to console.log to output a triangle of hashtags:

let sign = "#";           // Set variable 'sign' to '#'
let string = "";          // Set variable 'string' to an empty string
while(string.length < 7){ // While the length of string is less than 7
  string = string + sign; // String equals the concatenation of 'string and 'sign'
  console.log(string);    // Output string
}

// FizzBuzz
// Write program that uses console.log to print all numbers from 1 to 100
// For numbers divisible by three, print 'Fizz' instead of the number
// For numbers divisible by 5 (and not 3), print 'Buzz' instead
// After that works, modify program to output "FizzBuzz" for numbers bivisble by both 3 and 5
// It should still print "Fizz" or "Buzz" for numbers divisible by only one of those

let num = 1;
while(num < 100){
  if(num % 3 == 0){
    console.log('Fizz');
  } else if (num % 5 == 0){
    console.log('Buzz');
  } else {
    console.log(num);
  }
  num += 1;
}

console.log("Second part of the question.");

let number = 1;
while(number < 100){
  if(number % 3 == 0 && number % 5 == 0 ){  // This condition MUST be first in order for the second part of the question to work
    console.log('FizzBuzz');
  } else if(number % 3 == 0){
    console.log('Fizz');
  } else if (number % 5 == 0){
    console.log('Buzz');
  } else {
    console.log(number);
  }
  number += 1;
}

// Write a program that creates a string that represents an 8x8 grid using newline characters to seperate lines
// In each position of the grid there is either a space or a '#' character
// Characters should form a chessboard
// After this works, define a binding size = 8
// Change the program so that it works for any size

let board = "";
for(let x = 0; x < 8; x++){
  for(let y = 0; y < 8; y++){
    if((x+y) % 2 == 0){
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}
console.log(board);

// Solution Explanation:
// This is very tricky. We need an 8x8 grid where each position is either a " " or a "#"
// According to the diagram in the textbook, every second position is a "#"
// So every EVEN POSITION is a " " (and empty space)
// If we use a double-nested for loop, we can add to our string by rows and columns
// We need 8 rows and 8 columns so our loops will start at 0, end at 8, and increase by 1
// For the first row, in the first column, if our x+y position is divisible by 2 (in other words even), we will add a space to 'board'
// Otherwise, we will add a "#"
// After we finish with the first row, we use a newline character '\n to seperate the line and move onto the next row
