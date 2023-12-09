const io = require('../io/io')

let numero
let i = 1
let fatorial

io.write('Digite um número: ')
numero = io.readInt()
fatorial = numero

while (i < numero){
    fatorial = fatorial * i
    i++
}

io.write(fatorial)