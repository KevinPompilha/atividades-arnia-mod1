// Faça um algoritmo que leia a idade de uma pessoa expressa em anos,
// meses e dias e escreva a idade dessa pessoa expressa apenas em dias.
// Considerar ano com 365 dias e mês com 30 dias.

const io = require('../io/io')


let anos
let meses
let dias


io.write('Informe a sua idade: ')
anos = io.readInt()

io.write('Informe os meses: ')
meses = io.readInt()

io.write('Informe os dias: ')
dias = io.readInt()

const resultado = (anos * 365) + (meses * 30) + dias
io.write(`A idade em dias é: ${resultado}` )