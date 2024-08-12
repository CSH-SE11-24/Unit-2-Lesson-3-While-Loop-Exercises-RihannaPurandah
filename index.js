// Exercise 1: Counting to 10
// Use a while loop to print all numbers from 1 to 10
let counter = 0

while(counter < 10){
  counter++
  console.log(counter)
}


// Exercise 2: Even numbers
// Use a while loop to print all the even numbers from 20 to 40
let counter1 = 18

while(counter1 < 40){
  counter1+=2
  console.log(counter1)
}

// Exercise 3: Countdown
// Ask the user to enter a positive integer (remember to cast!) Use a while loop to print from that number down to 1
let number = 11

while(number > 1){
  number--
  console.log(number)
}

// Exercise 4: Sum of N Numbers
// Prompt the user to enter a positive integer. Calculate the sum of all numbers from 1 to that number using a while loop and display the result.
let user = prompt("Enter a positive integer:")
user = parseInt(user)
let sum = 0

while(user > sum){
  sum = sum + user
  sum++
}
console.log(sum)
// Exercise 5: Password Entry
// Create a simple password entry program. Ask the user to enter a password. Use a while loop to keep prompting the user until they enter the correct password (e.g., "secret").
let password = "Osiris25"
let user1 = prompt("Enter password")

while(user1 !== password){
  user1 = prompt("Try again")
}
console.log("Keep it a Secret")



// Extra Credit: Password Strength Checker
// Create a password strength checker with a while loop. Continuously prompt the user to enter a password until it meets the following criteria:
// - At least 8 characters long
// - Contains both uppercase and lowercase letters
// - Includes at least one special character (e.g., @, #, $, etc.)
// Display a message when a valid password is entered.
// Hint: start by doing the conditions one by one and then combine them after




