// Faça um programa de computador que receba do usuário 2 números,
// calcule o produto entre eles e acuse se o produto é maior que 10

const io = require('../io/io')

io.write('Informe o primeiro número: ')
const num1 = io.readInt()

io.write('Informe o segundo número: ')
const num2 = io.readInt()

const produto = num1 * num2

if (produto > 10){
    io.write(`O número ${produto} é maior do que 10`)
}else{
    io.write(`O número ${produto} não é maior do que 10`)
}