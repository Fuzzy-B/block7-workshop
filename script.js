//js file for secure the vault workshop

console.log('Hello!')

// 1. Pseudocode - write in english what we are doing 

// 2. make a string with the intro phrase

const introMessage = 'You have received this message because you have been chosen to open an important vault. Here is the secret combination:'

console.log(introMessage)

// 3. make 3 variables
//     -first var must equal 10
//     -second var must equal 40
//     -3rd var must equal 39

const num1 = 2 * 5
const num2 = (8 * 4) + 8 //PE(MD)(AS)
const num3 = 289 % 50 // % modulo operator returns the 'remainder'

//const isEven = (56 % 2) === 0 //easy modulo check for even/odd numbers

console.log('num1:', num1)
console.log('num2:', num2)
console.log('num3:', num3)

// 4. (comment code)

// 5. create a dialog box with the values

alert(introMessage + '\n' +num1 +', '+num2+', '+num3)