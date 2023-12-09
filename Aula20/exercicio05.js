// Faça um programa de computador para escrever 1 - ímpar, 2 - par, 3
// - ímpar, .... até n, sendo n fornecido por um usuário.

const io = require('../io/io')

io.write('Informe um número: ')
const num  = io.readInt()

let iterador = 0

while (iterador <= num){
    if (iterador % 2 === 0)
    io.write(`O número ${iterador} é par`)
else {
    io.write(`O número ${iterador} é ímpar`)

}

iterador++


}