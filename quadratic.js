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
