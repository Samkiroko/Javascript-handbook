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