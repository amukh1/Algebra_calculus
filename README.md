# Algebra (In js)

## Quadratics
https://web.stanford.edu/~surag/posts/alphazero.html

For example: ax^2 + bx + c = 0

> **Warning**
> THE PARSE FUNCTION REQUIRES IT TO BE IN ax^2 + bx + c = 0 FORM

> **Warning**
> THE QUADRATIC FUNCTION NEEDS TO BE FED AN A, B, AND C VALUE FOR IT TO WORK.

### Functions: 

## quadratic(a, b, c) --> returns two polynomial answers that can be zero.

> **Note**
> returns two polynomial answers that can be zero.

## parse('ax^2 + bx + c') --> returns an array with a, b, and c which can be directly passed into the ^quadratic function.

> **Note**
> returns an array with a, b, and c which can be directly passed into the ^quadratic function.

![formula for a quadratic](https://user-images.githubusercontent.com/85003861/195961868-8f12e94d-8fbd-45dc-8690-da6e8489e757.png)

# Example:

```js
// source

let eq = 'x^2 - 7x + 12 = 0'

let [a, b, c] = parse(eq)

let ans = quadratic(a, b, c)

console.log(ans) // (x - 3) == 0 || (x - 4) == 0

// looking at the source is a great way to learn quadratics
```
