a = *unknown
b = *unknown
c = *unknown
    factors = [] # empty list
    
i = c-|c|
loop {

# check if number is a factor
# if the remainder (%) of c/i is 0
if(c % i == 0) {
   # (current) i is a factor
   r = c/i  # get the other factor in the pair (i * what == c)
   # i * r == c
   if(i+r == b) {
    # add positive i and r to the list of factors (of c) (that also add up to b)
    factors.push(["+ {i}", "+ {r}"])
  }else if(-i+r == b) {
    # add negative i and r to the list of factors (of c) (that also add up to b)
    factors.push(["- {i}", "+ {r}"])
  } ... # !!! IMPORTANT: THIS MEANS WE KEEP CHECKING FOR EACH TYPE! (i+r), (-i+r), (i-r), (-i-r)!!
}
      
i = i + 1
  if(i == |2c|) {
    break # end loop
  }else {
    return # return to start of loop
  }

}

answer = `(x {factors[1][1]})(x {factors[1][2]})`
## answer = `(x {factors[2][1]})(x {factors[2][2]})` is also valid