// Escreva um algoritmo para ler o salário mensal atual de um funcionário e
// o percentual de reajuste. Calcular e escrever o valor do novo salário.

const io = require('../io/io')

io.write('Digite o seu salário: ')
const salario = io.readInt()

io.write('Digite a porcentagem de aumento: ')
const aumento = io.readInt()

const porcentagem = aumento / 100
const novosalario = salario + (porcentagem * salario) 

io.write(`O salário anterior era R$ ${salario} e com o aumento passou a ser R$ ${novosalario}`)