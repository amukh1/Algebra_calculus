# Algebra (In js)

## Quadratics

For example: ax^2 + bx + c = 0

### Functions: 

## quadratic(a, b, c) --> returns two polynomial answers that can be zero.

## parse('ax^2 + bx + c') --> returns an array with a, b, and c which can be directly passed into the ^quadratic function.

# Example:

```js
// source

let eq = 'x^2 − 7x + 12 = 0'

let [a, b, c] = parse(eq)

let ans = quadratic(a, b, c)

console.log(ans) // (x - 3) == 0 || (x - 4) == 0

// looking at the source is a great way to learn quadratics
```