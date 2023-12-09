const io = require('../io/io')

let iterador = 0

while (iterador < 100) {
    if (iterador % 2 === 0)
        io.write(`O número ${iterador} é par`)
    else {
        io.write(`O número ${iterador} é ímpar`)

    }
    iterador++
}

