//  Comparisons
/**
 * Greater/less than: a > b, a < b
 * Greater/less than or equals: a >= b, a <=b
 * Equal a ==b or a ===b type check
 * Not equal a != b
 * ? all Comparison operators return a boolean value
 * */

console.log(2 > 1) // true
console.log(2 == 1) // false
console.log(2 != 1) // true

// String comparison

/***
 *To see whether a string is greater than another, js uses dictionary or lexicographical order
 * */
console.log('Z' > 'A') // true
console.log('Glow' > 'Glee') // true
console.log('Bee' > 'Be') // true

// Comparison of different types

/**
 * when comparing values of different type, javascript convert the value to number
 *
 * **/

console.log('2' > 1) // true, string '2' becomes a number 2

// ? for boolean true becomes 1 and false become 0
console.log(true == 1) // true
console.log(false == 0) // true