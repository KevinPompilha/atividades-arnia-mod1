// Faça uma função que recebe um valor inteiro e verifica se o valor é par.
// A função deve retornar um valor booleano (true ou false).

const io = require('../io/io')

function numeroPar(numero) {
  return numero % 2 === 0
}

let resultado = numeroPar(5)
io.write(resultado)
