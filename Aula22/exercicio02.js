// Faça um programa para escrever seu nome n vezes, sendo n
// fornecido pelo usuário

const io = require('../io/io')

io.write('Escreva o seu nome: ')
const nome = io.read()

io.write('Defina a quantidade de repetições: ')
const repeticoes = io.readInt()

for( let i = 0; i < repeticoes; i++){
    io.write(nome)
}
