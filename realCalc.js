function differentiate(h, f, x) {
  return (f(x + h) - f(x))/h
}

function partial(fn, rsp){
    return function(){
        let f2 = fn.apply(null,arguments)
        let arg2 = arguments
        arg2[getParamNames(fn).indexOf(rsp)] += 0.1
        return (fn.apply(null,arg2) - f2)/0.1
    }
}

let s = (x) => x*x

s(4) // ~16
differentiate(0.0001, s, 4) // ~8
