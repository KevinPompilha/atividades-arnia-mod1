// Faça um programa que leia do usuário 5 nomes e depois imprime na tela estes
// mesmos nomes em ordem alfabética

const io = require('../io/io')

let nomes = []

for (let i = 0; i < 5; i++) {
    io.write(`Escreva o ${i + 1}º nome: `)
    const nome = io.read()
    nomes.push(nome)
}

nomes.sort()
io.write(nomes)


