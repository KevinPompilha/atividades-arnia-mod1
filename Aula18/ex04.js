// Faça um programa que receba o preço de dois produtos e imprima a
// média desses preços

const io = require('../io/io')

io.write('Digite um valor: ')
const num1 = io.readInt()

io.write('Digite outro valor: ')
const num2 = io.readInt()

const resultado = (num1 + num2) / 2
io.write(`A média entre ${num1} e ${num2} é ${resultado}`)