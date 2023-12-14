// Faça um programa para receber modelo, marca e valor de 5
// smartphones utilizando de uma classe Celular. Depois inclua na classe
// método que mostre os dados de cada um nesse formato: Modelo:
// [modelo] | Marca: [marca] | Valor: [valor]. Chame o método
// para cada smartphone.

const io = require('../io/io')

class Celular {
    constructor(modelo, marca, valor) {
        this.modelo = modelo
        this.marca = marca
        this.valor = valor

    }
    toString() {
        io.write(`Modelo: ${this.modelo} | Marca: ${this.marca} | Valor: ${this.valor}`)
    }
}

let cel = []
for (let i = 0; i < 1; i++) {
    io.write(`Informe o Modelo do ${i + 1}º aparelho:`)
    const modelo = io.read()

    io.write(`Informe a marca: `)
    const marca = io.read()

    io.write('Qual o valor do aparelho? ')
    const valor = io.readFloat()
    let cl = new Celular(modelo, marca, valor)

    cel.push(cl)
}
cel.forEach((celular => {
    celular.toString()
}))

