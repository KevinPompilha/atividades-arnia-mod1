const io = require('../io/io')

let iterador = 0

while (iterador < 20) {
    io.write('Arnia')

    iterador = iterador + 5

    io.write(iterador)
}