const io = require('../io/io')

/*Faça um programa que recebe o nome de um país e se o país for Brasil ou Portugal mostre e mensagem: "Este país fala português"*/

io.write('Informe o país: ')
const country = io.read()

if (country === 'Brasil' || country === 'Portugal'){
    io.write('Este país fala português')
}