// Faça um programa de computador para calcular o quanto gastou um
// fumante com seu vício. O usuário deverá informar o número de anos que
// fuma, o número de cigarros por dia e o preço do maço de cigarro.
// Considere o maço com 20 unidades (considere o ano com 365 dias)

const io = require('../io/io')

io.write('Programa para calcular quando você gastou com cigarros')

io.write('-------------------------------------------------------')

io.write('Informe a quantos anos você fuma: ')
const anos = io.readInt()

io.write('Informe a quantidade de cigarros por dia: ')
const cigarro = io.readInt()

io.write('Informe o valor do maço: ')
const valor = io.readFloat()

const total = (anos * cigarro * 365) / 20 * valor
io.write(`O valor gasto com cigarros é de R$ ${total}`)