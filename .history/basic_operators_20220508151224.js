// unary, binary, operand
/**
 * An operand -> is what operate are applied to 5 * 2, five and two are operand or argument
 * An operator is unary if it has a single operand or argument e.g the unary negation (-) reverses the sign of a number { let x = 1; x= -x result -1}
 * An operator is binary if it has two operands
 * **/

/**two operand example ***/
let x = 1,
    y = 3
console.log(y - x)

// other supported math operations
/***
 * addition +
 * subtraction -
 * multiplication *
 * Division /
 * Remainder % (the result of (a % b) is the remainder of the integer  division of a by b)
 * Exponentiation ** (The exponentiation operator a ** b, raises a to the power of b {school math =  a to power of b})
 * ***/

console.log(5 % 2) // remainder is 1

console.log(2 ** 4) // result 16

// for non-integer number as well eg square root is an exponentiation by 1/2

console.log(4 ** 1 / 2) // result is 2

// String concatenation with binary +

/**
 * If binary + is applied to string, it merges (concatenates or join them)
 * **/

let s = 'my' + 'string'
console.log(s) // result mystring

// if any of the operands is a string, then the other one is converted to sting too
console.log(2 + '1' + 2) //result "212" is converted to string

console.log(typeof(2 + 2 + '1')) //result "41 " string

//  ? if the operand is not a number, the unary plus converts it into a number

let apples = '2'
let oranges = '3'

console.log(+apples + +oranges) //result 5

//  Chaining assignment
let a, b, c

a = b = c = 2 + 4
console.log(a)
console.log(b)
console.log(c)

// Increment/decrement

let counter = 2
counter++

console.log(counter)

let counter2 = 2
counter2--

console.log(counter2)

/**
 * The operator ++ -- can be placed either before or after a variable
 * postfix [counter++]
 * prefix [--counter]
 **/
// ! The prefix form return the new value while the postfix form return the old value (prior to increment/decrement)

/***********BITWISE OPERATORS******************/
/**
 * Operator treat arguments as 32-bit integer number and work on level of their binary representation
 * ? The list of operators
 * * AND (&)
 * * OR (|)
 * * XOR (^)
 * * NOT (~)
 * * LEFT SHIFT (<<)
 * * RIGHT SHIFT (>>)
 * * ZERO-FILL RIGHT SHIFT
 **/

// comma

let bb = (1 + 2, 3 + 4)
console.log(bb)