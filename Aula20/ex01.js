const io = require('../io/io')

let iterador = 0

while (iterador < 15) {
    io.write('Brasil')

    iterador = iterador + 1

    io.write(iterador)
}