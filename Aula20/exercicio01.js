// Faça um programa que recebe do usuário um número inteiro n e uma
// frase e escreva esta frase n vezes

const io = require('../io/io')

io.write('Informe um número: ')
const num = io.readInt()

io.write('Digite uma frase: ')
const frase = io.read()

let frases = 0

while (frases < num){
    io.write(frase)
    frases++
}