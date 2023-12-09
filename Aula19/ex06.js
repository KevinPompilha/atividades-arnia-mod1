const io = require('../io/io')

/*Faça um programa que solicite ao usuário um numero entre 1 e 100. Se ele informar um número dentro das condições retorne "Número Válido" se não, retorne "Número Inválido"*/ 

io.write('Informe um número entre 1 e 100: ')
const num = io.readInt()

if (num >= 1 && num <= 100 ){
    io.write('Número válido')
}else{
    io.write('Número inválido')

}