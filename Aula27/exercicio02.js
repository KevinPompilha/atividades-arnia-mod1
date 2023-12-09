const precos = [1000, 40, 340, 501, 500, 1093, 245, 21]

let novosPrecos = []
novosPrecos = precos.map((preco) => {
  if(preco > 500){
    return preco * 0.85
  }
  return preco
})

console.log(novosPrecos)




