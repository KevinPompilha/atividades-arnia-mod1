// Faça um programa de computador que receba do usuário 2 números e
// acuse qual é o maior

const io = require('../io/io')

io.write('Informe um número: ')
const num1 = io.readInt()

io.write('Informe o outro número: ')
const num2 = io.readInt()

if (num1 > num2){
    io.write(`O ${num1} é maior do que o ${num2}`)
}else{
    io.write(`O ${num2} é maior do que ${num1}`)
}