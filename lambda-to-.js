function parseFN(x){
  let final = ``
  let body = x.split('.')[1]
  x = x.split('\\')[1].split('.')[0].split(' ')
  x.forEach((b) => {
    final = final + (`(${b}) => `)
  })

  return final + body
}
