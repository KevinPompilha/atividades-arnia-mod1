// Faça um programa que escreva dados de três produtos: Descrição, Código, Unidade e preço.

const io = require('../io/io')

io.write('Escreva a descrição do produto: ')
const description = io.read()

io.write('Escreva o código do produto: ')
const codigo = io.readInt()

io.write('Escreva a(s) unidade(s): ')
const unit = io.readInt()

io.write('Escreva o preço: ')
const preco = io.readFloat()

const compra = description + codigo + (unit * preco)
io.write(`Você comprou ${description}, o código é ${codigo}, foram ${unit} unidades e custou ${preco}`)

