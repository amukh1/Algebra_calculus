function quadratic(a1, b1, c1) {
    let a = a1/a1
    let b = b1/a1
    let c = c1/a1
    let factors = []
    for(let i = (c - (Math.abs(c))); i <= Math.abs(c*2); i++) {
// console.log(i) // << COMMENT 
    // check if number is a factor  // << COMMENT 
    if(c % i == 0) {
        if(i+(c/i) == b){
        factors.push(['+ '+i,'+ '+(c/i)])
        }else if(-i-(c/i) == b){
            factors.push(['- '+i,'- '+(c/i)])
        }else if(-i+(c/i) == b){
            factors.push(['- '+i,'- '+(c/i)])
        }else if(i-(c/i) == b){
            factors.push(['- '+i,'- '+(c/i)])
        }
        // console.log(i);  // << COMMENT 
    }
}

    console.log(factors)
    if(factors.length == 0) return `no factors found`
    let quaz = `(x ${factors[0][0]}) == 0 || (x ${factors[0][1]}) == 0`
    return quaz
}

function parse(equ) {
    let exp = equ.split("=")[0]
    return [(exp.split("x")[0] == '' ? 1 : exp.split("x")[0].split(" ").join("")) - 0, exp.split("x")[1] == '' ? 1 : (exp.split("x")[1].slice(2).split(" ").join("")) - 0, (exp.split("x")[2].split(" ").join("")) - 0]
}

// example x^2 - 7x + 12 = 0  // << COMMENT 

let equation = parse('x^2 + 5x + 14 = 0')

let answer = quadratic(equation[0], equation[1], equation[2])

console.log(answer)
