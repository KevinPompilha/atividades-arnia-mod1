const io = require('../io/io')

let iterador = 1
let soma = 0

while (iterador <= 100){
    io.write(`O valor do atual do iterador é ${iterador}`)
    soma = soma + iterador
    io.write(`O valor de soma atual é ${soma}`)
    iterador++
}