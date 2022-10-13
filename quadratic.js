function quadratic(a, b, c) {
    let factors = []
    for(let i = 1; i <= c; i++) {

    // check if number is a factor
    if(c % i == 0) {
        if(i+(c/i) == b){
        factors.push(['+ '+i,'+ '+(c/i)])
        }else if(-i-(c/i) == b){
            factors.push(['- '+i,'- '+(c/i)])
        }
        // console.log(i);
    }
}

    // factors.forEach((q,d)=>{
    //     let qqz = b-q 
    //     if(factors.includes(qqz)){
    //         console.log(factors[factors.indexOf(qqz)], q)
    //     }
    // })
    // return factors
    console.log(factors)
    let quaz = `(x ${factors[0][0]}) == 0 || (x ${factors[0][1]}) == 0`
    return quaz
}

function parse(equ) {
    let exp = equ.split("=")[0]
    return [(exp.split("x")[0] == '' ? 1 : exp.split("x")[0].split(" ").join("")) - 0, (exp.split("x")[1].slice(2).split(" ").join("")) - 0, (exp.split("x")[2].split(" ").join("")) - 0]
}

// example x^2 - 7x + 12 = 0

let equation = parse('x^2 - 7x + 12 = 0')

let answer = quadratic(equation[0], equation[1], equation[2])

console.log(answer)


