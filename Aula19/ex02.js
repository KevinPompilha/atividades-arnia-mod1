const io = require('../io/io')

/*Faça um programa para saber se um número é par ou ímpar*/

io.write('Informe o número: ')
const numero = io.readInt()
const resto = numero % 2 //número "mod" 2

if(resto === 0){
    io.write('O número é par')
}//else{
   // io.write('O número é ímpar')
//}

if (resto !== 0){
    io.write('O número é ímpar')
}