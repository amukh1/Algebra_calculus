# Algebra (In js)

## Quadratics

For example: ax^2 + bx + c = 0

### Functions: 

## quadratic(a, b, c) --> returns two polynomial answers that can be zero.

## parse('ax^2 + bx + c') --> returns an array with a, b, and c which can be directly passed into the ^quadratic function.

# Example:

```js
// source

let eq = 'x² − 7x + 12 = 0'

let [a, b, c] = parse(eq)

let ans = quadratic(a, b, c)

console(ans)
```