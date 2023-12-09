const io = require('../io/io')

// Escreva um programa que repita a frase "Arnia Escola de Programação" a quantidade de vezes que o usuário definiu

io.write('Defina a quantidade de repetições: ')
const repeticoes = io.readInt()

for( let i = 0; i < repeticoes; i++){
    io.write('Arnia Escola de Programação')
}