derive(dx, f, x) {
  return (f(x + dx) - f(x))/dx
}

let s = (x) => x*x

s(4) // ~16
derive(0.0001, s, 4) // ~8
