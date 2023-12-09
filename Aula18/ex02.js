// Faça um programa de computador para escrever o produto de dois
// números que o usuário digitar

const io = require('../io/io')

io.write('Digite o primeiro número: ')
const numero1 = io.readInt()

io.write('Digite o segundo número: ')
const numero2 = io.readInt()

const resultado = numero1 * numero2
io.write(`O resultado da multiplicação entre ${numero1} e ${numero2} é: ${resultado}`)