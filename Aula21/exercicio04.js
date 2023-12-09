// Escreva um algoritmo para ler o número total de eleitores de um
// município, o número de votos brancos, nulos e válidos. Calcular e escrever
// o percentual que cada um representa em relação ao total de eleitores.

const io = require('../io/io')

io.write('Informe a quantidade de Eleitores: ')
const eleitores = io.readInt()

io.write('Escreva a quantidade de votos brancos: ')
const brancos = io.readInt()

io.write('Escreva a quantidade de votos nulos: ')
const nulo = io.readInt()

io.write('Escreva a quantidade de votos válidos: ')
const validos = io.readInt()

const totalbrancos = (brancos / eleitores * 100) 
const totalnulo = (nulo / eleitores * 100)
const totavalidos = (validos / eleitores *100) 


io.write(`O total de votos brancos são de ${brancos}%`)
io.write(`O total de votos nulos são de ${nulo}%`)
io.write(`O total de votos válidos são de ${validos}%`)
