const io = require('../io/io')

// Programa para escrever um nome 10 vezes que foi fornecido pelo usuário 

for(let i = 0; i < 10; i++){
    io.write('Escreva o seu nome: ')
    const nome = io.read()

    io.write(`O nome informado foi ${nome}`)
}