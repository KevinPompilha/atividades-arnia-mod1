// Faça um programa de computador que receba do usuário dois números
// e imprima o resto da divisão do primeiro pelo segundo

const io = require('../io/io')

io.write('Digite um valor: ')
const numero1 = io.readInt()

io.write('Digite outro valor: ')
const numero2 = io.readInt()

const resultado = numero1 % numero2
io.write(`O resultado é ${resultado}`)