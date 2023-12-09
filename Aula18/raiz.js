//Faça um programa de computador para escrever a raiz quadrada de um número que o usuário fornecer

const io = require('../io/io')

io.write('Digite um valor: ')
const numero = io.readInt()

const resultado = Math.sqrt(numero)
io.write(`A raiz quadrada é ${resultado}`)