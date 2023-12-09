// Faça um programa de computador para receber preços de 10 produtos
// e depois imprimir os preços que estão acima da média.

const io = require('../io/io')

let total = 0
let preco
let media

let precos = []

for (i = 0; i < 5; i++) {
    io.write(`Cadastre o ${i + 1}º preço:`)
    preco = io.readFloat()
    precos.push(preco)
    total = total + preco

}
media = total / 5
io.write(`A média é ${media}`)


for (i = 0; i < 5; i++) {
    if (precos[i] > media) {
        io.write(`O ${i + 1}° preço acima da média foi de R$${precos[i]}`)
    }
}