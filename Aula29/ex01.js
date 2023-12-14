// Faça um programa para receber nome, preço e ano de lançamento de
// 10 carros utilizando de uma classe Carro. Depois inclua na classe um
// método que aumente o preço do carro em R$5.000. Chame o método
// para cada carro e mostre os dados atualizados.

const io = require('../io/io')

class Carro {
    nome
    preço
    anoDeLançamento


    constructor(nome, preço, anoDeLançamento) {
        this.nome = nome
        this.preço = preço
        this.anoDeLançamento = anoDeLançamento
    }
    aumentarPreço() {
        this.preço += 5000
    }
}


let carros = []

for (let i = 0; i < 1; i++) {
    io.write(`Informe o ${i + 1}º nome:`)
    const nome = io.read()

    io.write(`Informe o ${i + 1}º preço:`)
    const preço = io.readFloat()

    io.write(`Informe o ${i + 1}º ano de lançamento:`)
    const anoDeLançamento = io.read()

    const novoCarro = new Carro(nome, preço, anoDeLançamento)

    carros.push(novoCarro)

}

carros.forEach((carro => {
    carro.aumentarPreço()

}))

io.write(carros)








