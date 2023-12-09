const io = require('../io/io')

io.write('Informe um número: ')
const num = io.readInt()

io.write('Digite uma frase: ')
const frase = io.read()

let contador = 0

while (contador < num){
    io.write(frase)
    contador++
}

