// Faça um programa para imprimir os múltiplos de 5 menores ou igual
// a n, sendo n fornecido pelos usuários. Não use comando de decisão.

const io = require('../io/io')

io.write('Informe um número: ')
const n = io.readInt()

let numero = 0

while (numero <= n){
    io.write(numero)
    //numero += 5
    numero = numero + 5
}


